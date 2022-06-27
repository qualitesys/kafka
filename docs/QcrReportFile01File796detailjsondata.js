console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerScopeUtils.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerScopeUtils.java 5 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerScopeUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.internals.unsecured.OAuthBearerScopeUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.internals.unsecured.OAuthBearerScopeUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isValidScopeItem(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<String>"
 , "c2" : "parseScope(String)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "OAuthBearerScopeUtils"
 , "c2" : "OAuthBearerScopeUtils()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerScopeUtils.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerScopeUtils.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerScopeUtils.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class OAuthBearerScopeUtils contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerScopeUtils.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method isValidScopeItem arguments String  scopeItem"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerScopeUtils.java.html#20"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00020] For method parseScope arguments String  spaceDelimitedScope"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerScopeUtils.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.common.security.oauthbearer.internals.unsecured.OAuthBearerScopeUtils.parseScope@POLYN169597 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/unsecured/OAuthBearerScopeUtils.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.common.security.oauthbearer.internals.unsecured.OAuthBearerScopeUtils.parseScope@POLYN169597 the MagicNumber/String  'Invalid scope value: %s' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
