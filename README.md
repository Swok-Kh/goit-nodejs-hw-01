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

**Examples:**

> _node index.js -a list_

![list](https://github.com/swok-kh/goit-nodejs-hw-01/blob/main/screenshots/list.jpg?raw=true)

> _node index.js -action get -id 5_

![get](https://github.com/swok-kh/goit-nodejs-hw-01/blob/main/screenshots/get.jpg?raw=true)

> _node index.js --action "add" --name "Mango" --email "mango@gmail.com" --phone
> "322-22-22"_

![add](https://github.com/swok-kh/goit-nodejs-hw-01/blob/main/screenshots/add.jpg?raw=true)

> _node index.js --action="remove" --id=3_

![remove](https://github.com/swok-kh/goit-nodejs-hw-01/blob/main/screenshots/remove.jpg?raw=true)

## Error codes

- **1000**: _Read file error!_
- **1001**: _Write file error!_
- **1002**: _Empty file!_
- **1004**: _Unknown action type!_
- **1005**: _Wrong parameters!_
- **1006**: _Contact not found._

**Error examples:**

![errors](https://github.com/swok-kh/goit-nodejs-hw-01/blob/main/screenshots/errors.jpg?raw=true)
