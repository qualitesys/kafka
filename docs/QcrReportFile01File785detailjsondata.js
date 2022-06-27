console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java 15 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Login"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerRefreshingLogin"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerRefreshingLogin" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>;String;Configuration;AuthenticateCallbackHandler)"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Subject"
 , "c2" : "subject()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "serviceName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "LoginContext"
 , "c2" : "login()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.svg" }

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
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00024] The class OAuthBearerRefreshingLogin contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method configure arguments Map&lt;String ,? &gt;  configs|String  contextName|Configuration  configuration|AuthenticateCallbackHandler  loginCallbackHandler"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00029] For method configure list of called methods Object monObjet|javax.security.auth.Subject expiringCredentialRefreshingLogin_subjectN183943"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerRefreshingLogin.configure@POLYN183073 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerRefreshingLogin.configure@POLYN183073 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerRefreshingLogin.configure@POLYN183073 the MagicNumber/String  'Found expiring credential with principal '{}'.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerRefreshingLogin.configure@POLYN183073 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerRefreshingLogin.close@POLYN184942 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerRefreshingLogin.subject@POLYN185115 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerRefreshingLogin.subject@POLYN185115 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerRefreshingLogin.serviceName@POLYN185305 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerRefreshingLogin.serviceName@POLYN185305 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#87"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00087] Lock statement on synchronized method login"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerRefreshingLogin.login@POLYN185500 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerRefreshingLogin.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerRefreshingLogin.login@POLYN185500 the MagicNumber/String  'Login was not configured properly' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
