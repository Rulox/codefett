from rest_framework import serializers
from .models import CFUser


class CFUserSerializer(serializers.ModelSerializer):
    """
    Serializes a CFUser Model
    """
    user__password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = CFUser
        fields = ('id', 'user__email', 'full_name', 'user__password', 'avatar', 'created_at', 'user__date_joined')

        def create(self, validated_data):
            return CFUser.objects.create(**validated_data)

        def update(self, instance, validated_data):
            pass