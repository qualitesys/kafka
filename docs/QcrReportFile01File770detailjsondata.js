console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java 16 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AuthenticateCallbackHandler"
 , "c2" : "org.apache.kafka.common.security.authenticator.SaslServerCallbackHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.authenticator.SaslServerCallbackHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>;String;List<AppConfigurationEntry>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handle(Callback[])"
 , "c3" : "6"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleRealmCallback(RealmCallback)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleAuthorizeCallback(AuthorizeCallback)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.svg" }

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
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00020] The class SaslServerCallbackHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method configure arguments Map&lt;String ,? &gt;  configs|String  mechanism|List&lt;AppConfigurationEntry &gt;  jaasConfigEntries"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method handle arguments Callback[]  callbacks"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00033] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00034] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00035] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00036] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method handleRealmCallback arguments RealmCallback  rc"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument rc is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.security.authenticator.SaslServerCallbackHandler.handleRealmCallback@POLYN172239 the MagicNumber/String  'Client supplied realm: {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method handleAuthorizeCallback arguments AuthorizeCallback  ac"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument ac is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.common.security.authenticator.SaslServerCallbackHandler.handleAuthorizeCallback@POLYN172508 the MagicNumber/String  'Successfully authenticated client: authenticationID={}; authorizationID={}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.security.authenticator.SaslServerCallbackHandler.handleAuthorizeCallback@POLYN172508 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00057] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/authenticator/SaslServerCallbackHandler.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00057] Void method close is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
