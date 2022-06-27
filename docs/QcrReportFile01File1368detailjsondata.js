console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java 50 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ClusterMetadataAuthorizer"
 , "c2" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setAclMutator(AclMutator)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AclMutator"
 , "c2" : "aclMutatorOrException()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "completeInitialLoad()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<Void>"
 , "c2" : "initialLoadFuture()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "completeInitialLoad(Exception)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addAcl(Uuid;StandardAcl)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeAcl(Uuid)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "loadSnapshot(Map<Uuid,StandardAcl>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<Endpoint,?extendsCompletionStage<Void>>"
 , "c2" : "start(AuthorizerServerInfo)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "List<AuthorizationResult>"
 , "c2" : "authorize(AuthorizableRequestContext;List<Action>)"
 , "c3" : "2"
 , "c4" : "5"
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
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "superUsers()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AuthorizationResult"
 , "c2" : "defaultResult()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "getConfiguredSuperUsers(Map<String,?>)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "AuthorizationResult"
 , "c2" : "getDefaultResult(Map<String,?>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.metadata.authorizer.StandardAuthorizer.this" }
,
{ "ligne" :  "R1:org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN191024.configs" }
,
{ "ligne" :  "R2:org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN187257.aclMutator" }
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00033] The class StandardAuthorizer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#45"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00045] Lock statement on synchronized method setAclMutator"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method setAclMutator arguments AclMutator  aclMutator"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.aclMutatorOrException@POLYN187445 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.aclMutatorOrException@POLYN187445 the MagicNumber/String  'The current node is not the active controller.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#59"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00059] Lock statement on synchronized method completeInitialLoad"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.completeInitialLoad@POLYN187754 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.completeInitialLoad@POLYN187754 the MagicNumber/String  'Completed initial ACL load process.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.completeInitialLoad@POLYN187754 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method completeInitialLoad arguments Exception  e"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.completeInitialLoad@POLYN188165 the MagicNumber/String  'Failed to complete initial ACL load process.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method addAcl arguments Uuid  id|StandardAcl  acl"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method removeAcl arguments Uuid  id"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#87"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00087] Lock statement on synchronized method loadSnapshot"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method loadSnapshot arguments Map&lt;Uuid ,StandardAcl &gt;  acls"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#87"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00087] The argument acls is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method start arguments AuthorizerServerInfo  serverInfo"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#93"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00093] The argument serverInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.start@POLYN189063 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.start@POLYN189063 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method authorize arguments AuthorizableRequestContext  requestContext|List&lt;Action &gt;  actions"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00107] For method authorize list of called methods Object monObjet|AuthorizationResult curData_authorizeN190308"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#109"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00109] The argument actions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00113] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method acls arguments AclBindingFilter  filter"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.close@POLYN190817 the MagicNumber/String  'The authorizer was ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.close@POLYN190817 the MagicNumber/String  'closed before the initial load could complete.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#137"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00137] Lock statement on synchronized method configure"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00137] For method configure list of called methods Object monObjet|java.util.Set&lt;String&gt; getConfiguredSuperUsersN191169|AuthorizationResult getDefaultResultN191255"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#137"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00137] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN191024 the MagicNumber/String  'node.id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN191024 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN191024 the MagicNumber/String  'set super.users={}, default result={}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN191024 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00159] For method getConfiguredSuperUsers arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#159"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00159] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00165] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.getConfiguredSuperUsers@POLYN192276 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.getConfiguredSuperUsers@POLYN192276 the MagicNumber/String  ';' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00174] For method getDefaultResult arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#174"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00174] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.metadata.authorizer.StandardAuthorizer.getDefaultResult@POLYN193222 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.authorizer.StandardAuthorizer.loadSnapshot@POLYN188764"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.authorizer.StandardAuthorizer.aclCount@POLYN190705"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.authorizer.StandardAuthorizer.acls@POLYN190544"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.authorizer.StandardAuthorizer.addAcl@POLYN188416"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.authorizer.StandardAuthorizer.authorize@POLYN189892"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.authorizer.StandardAuthorizer.defaultResult@POLYN192149"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/authorizer/StandardAuthorizer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.authorizer.StandardAuthorizer.removeAcl@POLYN188611"
}} 
]
};
console.log('leListeStr 99 main end');
