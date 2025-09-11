import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface NotificationOptions {
  title: string;
  body?: string;
  icon?: string;
  tag?: string;
  requireInteraction?: boolean;
}

export const useNotifications = () => {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [isSupported, setIsSupported] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if notifications are supported
    setIsSupported('Notification' in window);
    
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async (): Promise<boolean> => {
    if (!isSupported) {
      toast({
        title: "Varsler ikke støttet",
        description: "Din nettleser støtter ikke push-varsler",
        variant: "destructive"
      });
      return false;
    }

    if (permission === 'granted') {
      return true;
    }

    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      
      if (result === 'granted') {
        toast({
          title: "Varsler aktivert! 🔔",
          description: "Du får nå beskjed når timere er ferdige",
        });
        return true;
      } else {
        toast({
          title: "Varsler avslått",
          description: "Du kan aktivere varsler i nettleserinnstillingene",
          variant: "destructive"
        });
        return false;
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return false;
    }
  };

  const sendNotification = (options: NotificationOptions): boolean => {
    if (!isSupported || permission !== 'granted') {
      return false;
    }

    try {
      const notification = new Notification(options.title, {
        body: options.body,
        icon: options.icon || '/favicon.ico',
        tag: options.tag,
        requireInteraction: options.requireInteraction || false,
        badge: '/favicon.ico'
      });

      // Auto-close after 10 seconds if not requiring interaction
      if (!options.requireInteraction) {
        setTimeout(() => {
          notification.close();
        }, 10000);
      }

      // Handle notification click
      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      return true;
    } catch (error) {
      console.error('Error sending notification:', error);
      return false;
    }
  };

  const scheduleReminder = (message: string, delay: number) => {
    setTimeout(() => {
      sendNotification({
        title: "Smakk Påminnelse 🍳",
        body: message,
        tag: 'reminder',
        requireInteraction: true
      });
    }, delay);
  };

  return {
    isSupported,
    permission,
    requestPermission,
    sendNotification,
    scheduleReminder,
    canSendNotifications: permission === 'granted' && isSupported
  };
};