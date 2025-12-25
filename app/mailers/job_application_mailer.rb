class JobApplicationMailer < ApplicationMailer
  def confirmation_email(application)
    @application = application
    @job = application.job
    @user = application.user

    mail(
      to:@user.email,
      subject: "Appliation Received - #{@job.title}"
    )
  end
end
