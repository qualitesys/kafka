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
{ "ligne" : { "" : ""
 , "c1" : "Configurable"
 , "c2" : "org.apache.kafka.server.authorizer.Authorizer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.authorizer.Authorizer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html#91"
 , "c1" : "Map<Endpoint,?extendsCompletionStage<Void>>"
 , "c2" : "start(AuthorizerServerInfo)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html#105"
 , "c1" : "List<AuthorizationResult>"
 , "c2" : "authorize(AuthorizableRequestContext;List<Action>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00122"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html#122"
 , "c1" : "List<?extendsCompletionStage<AclCreateResult>>"
 , "c2" : "createAcls(AuthorizableRequestContext;List<AclBinding>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00143"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html#143"
 , "c1" : "List<?extendsCompletionStage<AclDeleteResult>>"
 , "c2" : "deleteAcls(AuthorizableRequestContext;List<AclBindingFilter>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00154"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html#154"
 , "c1" : "Iterable<AclBinding>"
 , "c2" : "acls(AclBindingFilter)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00160"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html#160"
 , "c1" : "int"
 , "c2" : "aclCount()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00184"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html#184"
 , "c1" : "AuthorizationResult"
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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html#184"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00184] The argument requestContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
