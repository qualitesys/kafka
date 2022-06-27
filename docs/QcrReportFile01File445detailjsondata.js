console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java 10 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "CompletableFuture<T>"
 , "c2" : "org.apache.kafka.common.internals.KafkaCompletableFuture"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.internals.KafkaCompletableFuture" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "kafkaComplete(T)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "kafkaCompleteExceptionally(Throwable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "complete(T)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "completeExceptionally(Throwable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "obtrudeValue(T)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "obtrudeException(Throwable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<T>"
 , "c2" : "completeAsync(Supplier<?extendsT>;Executor)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<T>"
 , "c2" : "completeAsync(Supplier<?extendsT>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "CompletableFuture<T>"
 , "c2" : "completeOnTimeout(T;long;TimeUnit)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "UnsupportedOperationException"
 , "c2" : "erroneousCompletionException()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java.html#13"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00013] For method kafkaComplete arguments T  value"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java.html#18"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00018] For method kafkaCompleteExceptionally arguments Throwable  throwable"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method complete arguments T  value"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method completeExceptionally arguments Throwable  ex"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method obtrudeValue arguments T  value"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method obtrudeException arguments Throwable  ex"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method completeAsync arguments Supplier&lt;?  extends T &gt;  supplier|Executor  executor"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method completeAsync arguments Supplier&lt;?  extends T &gt;  supplier"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method completeOnTimeout arguments T  value|long  timeout|TimeUnit  unit"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaCompletableFuture.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.internals.KafkaCompletableFuture.erroneousCompletionException@POLYN168795 the MagicNumber/String  'User code should not complete futures returned from Kafka clients' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
