import { useState, useEffect, useRef } from "react";
import { Timer, Play, Pause, RotateCcw, Bell, BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useNotifications } from "@/hooks/use-notifications";

interface CookingTimerProps {
  cookingTime: string;
  recipeName: string;
}

export const CookingTimer = ({ cookingTime, recipeName }: CookingTimerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { toast } = useToast();
  const { sendNotification, requestPermission, canSendNotifications } = useNotifications();

  // Parse cooking time (e.g., "20 min" -> 20 minutes)
  const parseTime = (timeStr: string): number => {
    const match = timeStr.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  useEffect(() => {
    if (isOpen && !hasStarted) {
      const minutes = parseTime(cookingTime);
      const seconds = minutes * 60;
      setTimeLeft(seconds);
      setTotalTime(seconds);
    }
  }, [isOpen, cookingTime, hasStarted]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            
            // Send push notification
            const notificationSent = sendNotification({
              title: "⏰ Timer ferdig!",
              body: `${recipeName} bør være klar nå! Sjekk maten din.`,
              tag: 'timer-finished',
              requireInteraction: true
            });
            
            // Also show toast (fallback or additional notification)
            toast({
              title: "⏰ Timer ferdig!",
              description: `${recipeName} bør være klar nå!`,
              duration: 10000,
            });
            
            // Play notification sound
            try {
              const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmETBDuBzvLZiTYIGGS57eSSSgwOUarm7blmHhI1j9byyy4FJHfH8N2QQAoTXrTp66hVFAlFnt/xvGESBw==');
              audio.play().catch(() => {}); // Ignore errors if sound fails
            } catch (e) {}
            
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft, recipeName, toast]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = () => {
    setIsRunning(true);
    setHasStarted(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setHasStarted(false);
    const minutes = parseTime(cookingTime);
    const seconds = minutes * 60;
    setTimeLeft(seconds);
    setTotalTime(seconds);
  };

  const addMinute = () => {
    setTimeLeft(prev => prev + 60);
    setTotalTime(prev => prev + 60);
  };

  const progress = totalTime > 0 ? ((totalTime - timeLeft) / totalTime) * 100 : 0;
  const isFinished = timeLeft === 0 && hasStarted;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          {canSendNotifications ? (
            <BellRing className="w-4 h-4 text-green-600" />
          ) : (
            <Timer className="w-4 h-4" />
          )}
          {cookingTime}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Timer className="w-5 h-5 text-accent" />
            Koketimer
          </DialogTitle>
          <DialogDescription>
            {recipeName} • {cookingTime}
          </DialogDescription>
          
          {!canSendNotifications && (
            <div className="mt-2 p-2 bg-amber-50 border border-amber-200 rounded-md">
              <div className="flex items-center gap-2 text-amber-700 text-sm">
                <Bell className="w-4 h-4" />
                <span>Aktiver varsler for å få beskjed når timeren er ferdig</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-1 text-amber-700 hover:bg-amber-100"
                onClick={requestPermission}
              >
                Aktiver varsler
              </Button>
            </div>
          )}
        </DialogHeader>

        <Card className={`${isFinished ? 'border-green-500 bg-green-50' : ''}`}>
          <CardHeader className="pb-3">
            <CardTitle className={`text-center text-4xl font-mono ${
              isFinished ? 'text-green-600' : timeLeft <= 60 ? 'text-red-600' : 'text-foreground'
            }`}>
              {isFinished ? '00:00' : formatTime(timeLeft)}
            </CardTitle>
            
            {hasStarted && (
              <div className="space-y-2">
                <Progress 
                  value={progress} 
                  className={`h-2 ${isFinished ? '[&>div]:bg-green-500' : ''}`}
                />
                <p className="text-xs text-center text-muted-foreground">
                  {isFinished ? '✅ Ferdig!' : `${Math.floor(progress)}% fullført`}
                </p>
              </div>
            )}
          </CardHeader>
          
          <CardContent>
            {isFinished ? (
              <div className="text-center space-y-4">
                <div className="text-green-600 text-lg font-medium">
                  🎉 Timer ferdig!
                </div>
                <p className="text-sm text-muted-foreground">
                  {recipeName} bør være klar nå. Sjekk at alt ser bra ut!
                </p>
                <Button 
                  variant="outline" 
                  onClick={resetTimer}
                  className="w-full"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Start ny timer
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex gap-2">
                  {!hasStarted || !isRunning ? (
                    <Button 
                      onClick={startTimer}
                      className="flex-1"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {hasStarted ? 'Fortsett' : 'Start'}
                    </Button>
                  ) : (
                    <Button 
                      onClick={pauseTimer}
                      variant="outline"
                      className="flex-1"
                    >
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </Button>
                  )}
                  
                  <Button 
                    variant="outline" 
                    onClick={resetTimer}
                    disabled={!hasStarted}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>

                {hasStarted && (
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={addMinute}
                      className="flex-1 text-xs"
                    >
                      +1 min
                    </Button>
                  </div>
                )}

                {timeLeft <= 60 && timeLeft > 0 && isRunning && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                    <Bell className="w-5 h-5 text-red-600 mx-auto mb-1" />
                    <p className="text-red-600 text-sm font-medium">
                      Mindre enn 1 minutt igjen!
                    </p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};