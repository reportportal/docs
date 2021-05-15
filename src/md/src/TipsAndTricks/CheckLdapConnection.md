## How to check LDAP connection

Firstly, check the availability of your LDAP server from the server when ReportPortal is installed. For example, use the command ldapsearch.
 
```bash
ldapsearch -x -h <ldap hostname> -p <ldap port> -D "<bind DN>" -w "<bind password>" -b "<base users DN>" "uid=user1"
```

Output will be:
```
# extended LDIF
#
# LDAPv3
# base <dc=rp,dc=com> with scope subtree
# filter: uid=user1
# requesting: ALL
#

# user1, people, rp.com
dn: cn=tester,ou=people,dc=rp,dc=com
objectClass: inetOrgPerson
cn: user1
sn: user1
uid: user1
userPassword:: PASSWORD
mail: user1@rp.com
description: user1 for experiments 

# search result
search: 2
result: 0 Success

# numResponses: 2
# numEntries: 1
```


### Hints
If you are using docker you can also use the internal container IP  `docker inspect -f '\{{range .NetworkSettings.Networks}}\{{.IPAddress}}\{{end}}' <LDAP container name>`
