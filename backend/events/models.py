from django.db import models
from alumni.models import Alumni
from django.utils import timezone

##################These classes are Databases Tables for storing information ######################
class Event(models.Model):
    """This model is used for storing the events that are created by Alumni
       It contains the author of the event, title, description, date and time of the event
       and the image of the event.
       """
    title = models.CharField(max_length=100,null=False)
    description = models.TextField(max_length=500, null=False)
    date = models.DateField(null=False)
    time = models.TimeField()
    location = models.CharField(max_length=100,null=False,default=f"{title}")
    image = models.ImageField(upload_to="events/",default="events/default.png",max_length=500)
    author = models.ForeignKey(Alumni,on_delete=models.CASCADE)

    class Meta:
        ordering = ['-date','-time']
    
    def __str__(self) -> str:
        return self.title

class Notification(models.Model):
    """This model is used to store notifications for users
       The notifications for each users are tracked by the notification id and 
       the receiver id
       The notifications are automatically created when a new event is created
       The notifications are automatically deleted when an event is deleted
       The notifications are mapped to the User by the Foreign key relationship"""
    author = models.ForeignKey(Alumni,on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)
    title = models.CharField(max_length=100,null=False)
    description = models.TextField(max_length=500, null=False)
    image = models.ImageField(upload_to="notifications/",default="notifications/default.png",max_length=500)
    is_read = models.BooleanField(default=False)
    # Receiver of the notifications with different notification id
    receiver = models.ForeignKey(Alumni,on_delete=models.CASCADE, related_name="+")

    class Meta:
        # This class is used to order the notifications by the created_at field in descending order
        ordering = ['-created_at']

    def __str__(self) -> str:
        # This function is used to represent the object in the admin panel
        return f"{self.id} {self.receiver}'s notification"
