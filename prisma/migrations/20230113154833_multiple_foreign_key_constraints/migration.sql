-- AlterTable
Alter TABLE `Audit` MODIFY COLUMN record_id INT;

Alter TABLE `Audit` MODIFY `record_name` ENUM('Approval', 'BiweaklyMeetings', 'Departments', 'Designations', 'Feedback', 'Nominees', 
  'Permissions', 'ReviewTags', 'ReviewTemplates', 'Tasks', 'TemplateOnTags', 'UserPermissions', 'UserReviews', 'Users');
