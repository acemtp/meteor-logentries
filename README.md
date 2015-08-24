meteor-logentries
=====================

A meteor package for logentries (https://logentries.com).

Install
-------
```
meteor add acemtp:logentries
```

Usage
-----

Add in your `settings.json` your logentries token in a `logentries` object. It should look something like:

		{
		  "logentries": {
		    "token": "x3bxx45b-dx84-4x26-bb49-3ca03dcxxxxx"
		  }
		}

Launch your project with `meteor --settings settings.json` and all `console.log` and `console.error` will be automatically send to logentries.
