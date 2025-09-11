import { useState } from "react";
import { Bell, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNotifications } from "@/hooks/use-notifications";
import { useToast } from "@/hooks/use-toast";

interface ReminderButtonProps {
  recipeName: string;
  step?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export const ReminderButton = ({ 
  recipeName, 
  step, 
  variant = "outline", 
  size = "sm" 
}: ReminderButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reminderTime, setReminderTime] = useState<string>("");
  const { sendNotification, requestPermission, canSendNotifications, scheduleReminder } = useNotifications();
  const { toast } = useToast();

  const reminderOptions = [
    { value: "5", label: "5 minutter" },
    { value: "10", label: "10 minutter" },
    { value: "15", label: "15 minutter" },
    { value: "30", label: "30 minutter" },
    { value: "60", label: "1 time" },
    { value: "120", label: "2 timer" },
  ];

  const handleSetReminder = async () => {
    if (!reminderTime) return;

    // Request permission if not granted
    if (!canSendNotifications) {
      const permitted = await requestPermission();
      if (!permitted) return;
    }

    const minutes = parseInt(reminderTime);
    const milliseconds = minutes * 60 * 1000;

    const reminderMessage = step 
      ? `Tid for steg: "${step}" i ${recipeName}`
      : `Sjekk på ${recipeName} - det kan være på tide å gjøre noe!`;

    // Schedule the reminder
    scheduleReminder(reminderMessage, milliseconds);

    // Show confirmation
    toast({
      title: "⏰ Påminnelse satt!",
      description: `Du får beskjed om ${minutes} min`,
    });

    setIsOpen(false);
    setReminderTime("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className="flex items-center gap-2">
          <Bell className="w-4 h-4" />
          {size !== "sm" && "Påminnelse"}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-accent" />
            Sett påminnelse
          </DialogTitle>
          <DialogDescription>
            {step ? `For steg: "${step}"` : `For ${recipeName}`}
          </DialogDescription>
        </DialogHeader>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Når skal du få påminnelse?</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div>
              <Select value={reminderTime} onValueChange={setReminderTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Velg tid" />
                </SelectTrigger>
                <SelectContent>
                  {reminderOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {option.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {!canSendNotifications && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-md">
                <div className="flex items-center gap-2 text-amber-700 text-sm">
                  <Bell className="w-4 h-4" />
                  <span>Du må aktivere varsler først</span>
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

            <div className="flex gap-2">
              <Button
                onClick={handleSetReminder}
                disabled={!reminderTime}
                className="flex-1"
              >
                Sett påminnelse
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Avbryt
              </Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};