console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java 23 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Login"
 , "c2" : "org.apache.kafka.common.security.authenticator.AbstractLogin"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.authenticator.AbstractLogin" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#50"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>;String;Configuration;AuthenticateCallbackHandler)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#58"
 , "c1" : "LoginContext"
 , "c2" : "login()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#66"
 , "c1" : "Subject"
 , "c2" : "subject()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#70"
 , "c1" : "String"
 , "c2" : "contextName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#74"
 , "c1" : "Configuration"
 , "c2" : "configuration()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.svg" }

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
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method configure arguments Map&lt;String ,? &gt;  configs|String  contextName|Configuration  configuration|AuthenticateCallbackHandler  loginCallbackHandler"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.security.authenticator.AbstractLogin.login@POLYN156329 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.security.authenticator.AbstractLogin.login@POLYN156329 the MagicNumber/String  'Successfully logged in.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method configure arguments Map&lt;String ,? &gt;  configs|String  saslMechanism|List&lt;AppConfigurationEntry &gt;  jaasConfigEntries"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method handle arguments Callback[]  callbacks"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00094] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00095] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00095] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00097] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00098] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00102] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00102] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.common.security.authenticator.AbstractLogin.DefaultLoginCallbackHandler.handle@POLYN157401 the MagicNumber/String  'Could not login: the client is being asked for a password, but the Kafka' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.security.authenticator.AbstractLogin.DefaultLoginCallbackHandler.handle@POLYN157401 the MagicNumber/String  ' client code does not currently support obtaining a password from the user.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.common.security.authenticator.AbstractLogin.DefaultLoginCallbackHandler.handle@POLYN157401 the MagicNumber/String  'Unrecognized SASL Login callback' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#88"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00088] Void method configure is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#88"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00088] Void method configure is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00111] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00111] Void method close is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.security.authenticator.AbstractLogin.login@POLYN156329"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00059] In the recursive method org.apache.kafka.common.security.authenticator.AbstractLogin.login@POLYN156329 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00061] In the recursive method org.apache.kafka.common.security.authenticator.AbstractLogin.login@POLYN156329 the MagicNumber/String 'Successfully logged in.' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/AbstractLogin.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
