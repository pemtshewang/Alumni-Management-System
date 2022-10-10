from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.hashers import make_password

class AlumniManager(BaseUserManager):

    # def create_user(self, email, password, **extra_fields):
    #     if not email:
    #         raise ValueError(('Users must have an email address'))
    #     email = self.normalize_email(email)
    #     user = self.model(email=email, **extra_fields)
    #     user.set_password(password)
    #     user.save()
    #     return user

    # def create_superuser(self,email: Optional[str] = None, password: Optional[str] = None, **extra_fields: Any):

    def create_user(self, email, password, **extra_fields):
        """
        Creates and saves a User with the given email, date of
        birth and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            **extra_fields,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password,**extrafields):
        """
        Creates and saves a superuser with the given email, date of
        birth and password.
        """
        extrafields.setdefault('is_staff', True)
        extrafields.setdefault('is_superuser', True)
        extrafields.setdefault('is_active', True)
        extrafields.setdefault('is_admin', True)

        if extrafields.get('is_staff') is not True:
            raise ValueError(('Superuser must have is_staff=True.'))
        if extrafields.get('is_superuser') is not True:
            raise ValueError(('Superuser must have is_superuser=False.'))
        user = self.create_user(email, password, **extrafields)
        user.save(using=self._db)
        return user