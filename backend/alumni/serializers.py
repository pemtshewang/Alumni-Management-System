from rest_framework.serializers import ModelSerializer
from .models import Alumni
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class AlumniListSerializer(ModelSerializer):
    class Meta:
        model = Alumni
        fields = ["first_name","last_name","email","graduation_year","company","job_profile","profile_image"]
        read_only_fields = [*fields]

class AlumniProfileDetailEditSerializer(ModelSerializer):
    class Meta:
        model = Alumni
        fields = "__all__"
        exclude = ["is_staff","date_joined","is_active"]

####################For Token Authorization####################
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data.pop('refresh', None) # remove refresh from the payload
        data['access'] = str(refresh.access_token)

        # Add extra responses here
        data['id'] = self.user.id
        data['first_name'] = self.user.first_name
        data['profile_image'] = str(self.user.profile_image)
        return data

#########################################################

####################Create Serializer####################
class AlumniCreateSerializer(ModelSerializer):
    class Meta:
        model = Alumni
        fields = ["first_name","last_name","cid_Number","email","password","graduation_year","company","job_profile","profile_image"]
    def create(self, validated_data):
        return  Alumni.objects.create_user(**validated_data)
########################################################