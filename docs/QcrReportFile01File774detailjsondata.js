console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java 142 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractLogin"
 , "c2" : "org.apache.kafka.common.security.kerberos.KerberosLogin"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.kerberos.KerberosLogin" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>;String;Configuration;AuthenticateCallbackHandler)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "LoginContext"
 , "c2" : "login()"
 , "c3" : "25"
 , "c4" : "72"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Subject"
 , "c2" : "subject()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "serviceName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "getServiceName(Map<String,?>;String;Configuration)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "long"
 , "c2" : "getRefreshTime(KerberosTicket)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KerberosTicket"
 , "c2" : "getTGT()"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "hasSufficientTimeElapsed()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "reLogin()"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "login(LoginContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "logout()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "long"
 , "c2" : "currentElapsedTime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "long"
 , "c2" : "currentWallTime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE392"
 , "c3" : "Failure to report error in status code"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "87"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method configure arguments Map&lt;String ,? &gt;  configs|String  contextName|Configuration  configuration|AuthenticateCallbackHandler  callbackHandler"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00065] For method configure list of called methods Object monObjet|String getServiceNameN194658"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00077] For method login list of called methods Object monObjet|long currentElapsedTimeN194995|javax.security.auth.login.Configuration configurationN195346"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00117] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00120] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00151] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00152] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00168] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00172] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00184] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00191] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00198] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00216] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00223] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00232] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00129] The same method call tgt.getRenewTill() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00174] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00191] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00198] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00200] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00216] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00223] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE392[00234] Failure to report error in status code (see http://cwe.mitre.org/data/definitions/392.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'useTicketCache' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'useTicketCache' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'true' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'principal' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'principal' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: It is not a Kerberos ticket' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: It is a Kerberos ticket' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'kafka-kerberos-refresh-thread-%s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: TGT refresh thread started.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: No TGT found: will try again at {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'The TGT cannot be renewed beyond the next expiry date: {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'This process will not be able to authenticate new SASL connections after that ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'time (for example, it will not be able to authenticate a new connection with a Kafka ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'Broker).  Ask your system administrator to either increase the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  ''renew until' time by doing : 'modprinc -maxrenewlife {} ' within ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'kadmin, or instead, to generate a keytab for {}. Because the TGT's ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'expiry cannot be further extended by refreshing, exiting refresh thread now.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: Refreshing now because expiry is before next scheduled refresh time.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: TGT refresh thread time adjusted from {} to {} since the former is sooner ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'than the minimum refresh interval ({} seconds) from now.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: Next refresh: {} is later than expiry {}. This may indicate a clock skew problem.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'Check that this host and the KDC hosts' clocks are in sync. Exiting refresh thread.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: TGT refresh sleeping until: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: TGT renewal thread has been interrupted and will exit.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: NextRefresh: {} is in the past: exiting refresh thread. Check' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  ' clock sync between this host and KDC - (KDC's clock is likely ahead of this host).' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  ' Manual intervention will be required for this client to successfully authenticate.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  ' Exiting refresh thread.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '-R' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: Running ticket cache refresh command: {} {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: Error when trying to renew with TicketCache, but will retry ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: Interrupted while renewing TGT, exiting Login thread' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: Could not renew TGT due to problem running shell command: '{} {}'. ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  'Exiting refresh thread.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: Error when trying to re-Login, but will retry ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: Interrupted during login retry after LoginException:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: Could not refresh TGT.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.common.security.kerberos.KerberosLogin.login@POLYN194899 the MagicNumber/String  '[Principal={}]: Failed to refresh TGT: refresh thread exiting now.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.common.security.kerberos.KerberosLogin.close@POLYN203145 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.common.security.kerberos.KerberosLogin.close@POLYN203145 the MagicNumber/String  '[Principal={}]: Error while waiting for Login thread to shutdown.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#265"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00265] For method getServiceName arguments Map&lt;String ,? &gt;  configs|String  contextName|Configuration  configuration"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#265"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00265] For method getServiceName list of called methods Object monObjet|String JaasContext_configEntryOptionN204254"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#265"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00265] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#265"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00265] The argument configuration is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.common.security.kerberos.KerberosLogin.getServiceName@POLYN203922 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.common.security.kerberos.KerberosLogin.getServiceName@POLYN203922 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.common.security.kerberos.KerberosLogin.getServiceName@POLYN203922 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.common.security.kerberos.KerberosLogin.getServiceName@POLYN203922 the MagicNumber/String  'Conflicting serviceName values found in JAAS and Kafka configs ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.common.security.kerberos.KerberosLogin.getServiceName@POLYN203922 the MagicNumber/String  'value in JAAS file %s, value in Kafka config %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.common.security.kerberos.KerberosLogin.getServiceName@POLYN203922 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.common.security.kerberos.KerberosLogin.getServiceName@POLYN203922 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.common.security.kerberos.KerberosLogin.getServiceName@POLYN203922 the MagicNumber/String  'No serviceName defined in either JAAS or Kafka config' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#284"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00284] For method getRefreshTime arguments KerberosTicket  tgt"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#284"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00284] The argument tgt is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00287] In method org.apache.kafka.common.security.kerberos.KerberosLogin.getRefreshTime@POLYN205183 the MagicNumber/String  '[Principal={}]: TGT valid starting at: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.common.security.kerberos.KerberosLogin.getRefreshTime@POLYN205183 the MagicNumber/String  '[Principal={}]: TGT expires: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00302] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00303] The same method call server.getRealm() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.common.security.kerberos.KerberosLogin.getTGT@POLYN206149 the MagicNumber/String  'krbtgt/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.common.security.kerberos.KerberosLogin.getTGT@POLYN206149 the MagicNumber/String  '@' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.common.security.kerberos.KerberosLogin.getTGT@POLYN206149 the MagicNumber/String  'Found TGT with client principal '{}' and server principal '{}'.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.common.security.kerberos.KerberosLogin.getTGT@POLYN206149 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00312"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#312"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00312] For method hasSufficientTimeElapsed list of called methods Object monObjet|long currentElapsedTimeN207040"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.common.security.kerberos.KerberosLogin.hasSufficientTimeElapsed@POLYN206965 the MagicNumber/String  '[Principal={}]: Not attempting to re-login since the last re-login was attempted less than {} seconds before.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.common.security.kerberos.KerberosLogin.hasSufficientTimeElapsed@POLYN206965 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.common.security.kerberos.KerberosLogin.hasSufficientTimeElapsed@POLYN206965 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.common.security.kerberos.KerberosLogin.hasSufficientTimeElapsed@POLYN206965 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#323"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00323] For method reLogin list of called methods Object monObjet|long currentElapsedTimeN208058"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00333"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#333"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00333] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.common.security.kerberos.KerberosLogin.reLogin@POLYN207515 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00328"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00328] In method org.apache.kafka.common.security.kerberos.KerberosLogin.reLogin@POLYN207515 the MagicNumber/String  'Login must be done first' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00334"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00334] In method org.apache.kafka.common.security.kerberos.KerberosLogin.reLogin@POLYN207515 the MagicNumber/String  'Initiating logout for {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.common.security.kerberos.KerberosLogin.reLogin@POLYN207515 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.common.security.kerberos.KerberosLogin.reLogin@POLYN207515 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.common.security.kerberos.KerberosLogin.reLogin@POLYN207515 the MagicNumber/String  'Initiating re-login for {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#353"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00353] For method login arguments LoginContext  loginContext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#353"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00353] The argument loginContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.kerberos.KerberosLogin.currentElapsedTime@POLYN208871"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.kerberos.KerberosLogin.currentWallTime@POLYN208977"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.kerberos.KerberosLogin.getRefreshTime@POLYN205183"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.kerberos.KerberosLogin.reLogin@POLYN207515"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.kerberos.KerberosLogin.logout@POLYN208758"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.kerberos.KerberosLogin.configure@POLYN193795"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.kerberos.KerberosLogin.close@POLYN203145"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#287"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00287] In the recursive method org.apache.kafka.common.security.kerberos.KerberosLogin.getRefreshTime@POLYN205183 the MagicNumber/String '[Principal={}]: TGT valid starting at: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00288] In the recursive method org.apache.kafka.common.security.kerberos.KerberosLogin.getRefreshTime@POLYN205183 the MagicNumber/String '[Principal={}]: TGT expires: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#327"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00327] In the recursive method org.apache.kafka.common.security.kerberos.KerberosLogin.reLogin@POLYN207515 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00328"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#328"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00328] In the recursive method org.apache.kafka.common.security.kerberos.KerberosLogin.reLogin@POLYN207515 the MagicNumber/String 'Login must be done first' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00334"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#334"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00334] In the recursive method org.apache.kafka.common.security.kerberos.KerberosLogin.reLogin@POLYN207515 the MagicNumber/String 'Initiating logout for {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#341"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00341] In the recursive method org.apache.kafka.common.security.kerberos.KerberosLogin.reLogin@POLYN207515 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#346"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00346] In the recursive method org.apache.kafka.common.security.kerberos.KerberosLogin.reLogin@POLYN207515 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#347"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00347] In the recursive method org.apache.kafka.common.security.kerberos.KerberosLogin.reLogin@POLYN207515 the MagicNumber/String 'Initiating re-login for {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#244"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00244] In the recursive method org.apache.kafka.common.security.kerberos.KerberosLogin.close@POLYN203145 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/kerberos/KerberosLogin.java.html#249"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00249] In the recursive method org.apache.kafka.common.security.kerberos.KerberosLogin.close@POLYN203145 the MagicNumber/String '[Principal={}]: Error while waiting for Login thread to shutdown.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
