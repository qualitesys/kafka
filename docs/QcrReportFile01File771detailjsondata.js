console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java 15 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "AuthenticateCallbackHandler"
 , "c2" : "org.apache.kafka.common.security.authenticator.SaslServerCallbackHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.authenticator.SaslServerCallbackHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#46"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;;String;List&lt;AppConfigurationEntry&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#51"
 , "c1" : "void"
 , "c2" : "handle(Callback[])"
 , "c3" : "6"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#62"
 , "c1" : "void"
 , "c2" : "handleRealmCallback(RealmCallback)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#67"
 , "c1" : "void"
 , "c2" : "handleAuthorizeCallback(AuthorizeCallback)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#77"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method configure arguments Map&lt;String,?&gt;  configs|String  mechanism|List&lt;AppConfigurationEntry&gt;  jaasConfigEntries"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method handle arguments Callback[]  callbacks"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00053] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00054] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00055] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00056] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method handleRealmCallback arguments RealmCallback  rc"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#62"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00062] The argument rc is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.security.authenticator.SaslServerCallbackHandler.handleRealmCallback@POLYN160935 the MagicNumber/String  'Client supplied realm: {} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method handleAuthorizeCallback arguments AuthorizeCallback  ac"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#67"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00067] The argument ac is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.security.authenticator.SaslServerCallbackHandler.handleAuthorizeCallback@POLYN161204 the MagicNumber/String  'Successfully authenticated client: authenticationID={}; authorizationID={}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.common.security.authenticator.SaslServerCallbackHandler.handleAuthorizeCallback@POLYN161204 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#77"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00077] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#77"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00077] Void method close is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
