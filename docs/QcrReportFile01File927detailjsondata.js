console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java 2 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Configurable,Closeable"
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
 , "c1" : "Map&lt;Endpoint,?extendsCompletionStage&lt;Void&gt;&gt;"
 , "c2" : "start(AuthorizerServerInfo)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html#105"
 , "c1" : "List&lt;AuthorizationResult&gt;"
 , "c2" : "authorize(AuthorizableRequestContext;List&lt;Action&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00122"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html#122"
 , "c1" : "List&lt;?extendsCompletionStage&lt;AclCreateResult&gt;&gt;"
 , "c2" : "createAcls(AuthorizableRequestContext;List&lt;AclBinding&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00143"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html#143"
 , "c1" : "List&lt;?extendsCompletionStage&lt;AclDeleteResult&gt;&gt;"
 , "c2" : "deleteAcls(AuthorizableRequestContext;List&lt;AclBindingFilter&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00154"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html#154"
 , "c1" : "Iterable&lt;AclBinding&gt;"
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
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.svg" }

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
 , "c2" : "QC-JAVSOLIDI"
 , "c3" : "The class does not respect the SOLID principle Interface Segregation"
 , "c4" : "1"
}}
,
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
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.html#79"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00079] The interface Authorizer does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Authorizer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
