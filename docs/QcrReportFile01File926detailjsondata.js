console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java 1 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Configurable"
 , "c2" : "org.apache.kafka.server.authorizer.Authorizer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.authorizer.Authorizer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Map<Endpoint,?extendsCompletionStage<Void>>"
 , "c2" : "start(AuthorizerServerInfo)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<AuthorizationResult>"
 , "c2" : "authorize(AuthorizableRequestContext;List<Action>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<?extendsCompletionStage<AclCreateResult>>"
 , "c2" : "createAcls(AuthorizableRequestContext;List<AclBinding>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<?extendsCompletionStage<AclDeleteResult>>"
 , "c2" : "deleteAcls(AuthorizableRequestContext;List<AclBindingFilter>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Iterable<AclBinding>"
 , "c2" : "acls(AclBindingFilter)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "aclCount()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AuthorizationResult"
 , "c2" : "authorizeByResourceType(AuthorizableRequestContext;AclOperation;ResourceType)"
 , "c3" : "21"
 , "c4" : "38"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.svg" }

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
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument requestContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
