# goit-nodejs-hw-01

## App's option

- Option: **-a**, **--action** (may be a _list_, _get_, _add_ or _remove_).
  Default value is _list_
  - **list** - dispalays all contacts.
  - **get** - dispalys found contact by id. Required **id** option.
  - **add** - adds contact to contact list. Required **name**, **email** and
    **phone** option.
  - **remove** - removes contact by id. Required **id** option.
- Option: **-i**, **--id** (contact id)
  - Contact's id can only be a number. Used to delete or get one contact.
- Option: **-n**, **--name**. Contact's name. Used to add contact.
- Option: **-e**, **--email**. Contact's email. Used to add contact.
- Option: **-p**, **--phone**. Contact's phone. Used to add contact.
