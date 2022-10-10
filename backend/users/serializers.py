from rest_framework import serializers
from .models import Alumni

class AlumniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumni
        # Controls what are to displayed on the field
        fields = ("id","first_name","last_name","email","password","phone_number")
        # Doesn't send as response but included in the form data -> read_only as the opposite
        extra_kwargs = {'password': {'write_only': True}}

# This creates the phone number 
    def create(self, validated_data):
        user = Alumni(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data["last_name"],
            phone_number=validated_data["phone_number"]
        )
        user.set_password(validated_data['password'])
        user.save()
        return user