console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerIllegalTokenException.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerIllegalTokenException.java 2 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerIllegalTokenException.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "KafkaException"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.internals.unsecured.OAuthBearerIllegalTokenException"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.internals.unsecured.OAuthBearerIllegalTokenException" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "OAuthBearerIllegalTokenException"
 , "c2" : "OAuthBearerIllegalTokenException(OAuthBearerValidationResult)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "OAuthBearerValidationResult"
 , "c2" : "reason()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerIllegalTokenException.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerIllegalTokenException.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerIllegalTokenException.java.html#14"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00014] The argument reason is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerIllegalTokenException.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method org.apache.kafka.common.security.oauthbearer.internals.unsecured.OAuthBearerIllegalTokenException.OAuthBearerIllegalTokenException@POLYN162914 the MagicNumber/String  'The reason indicates success; it must instead indicate failure' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
