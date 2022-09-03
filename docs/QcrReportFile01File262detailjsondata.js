console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/KafkaFuture.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/KafkaFuture.java 10 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/KafkaFuture.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Future<T>"
 , "c2" : "org.apache.kafka.common.KafkaFuture"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.KafkaFuture" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "KafkaFuture<Void>"
 , "c2" : "allOf(KafkaFuture<?>...)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "CompletionStage<T>"
 , "c2" : "toCompletionStage()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "KafkaFuture<T>"
 , "c2" : "whenComplete(BiConsumer<?superT,?superThrowable>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "complete(T)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "completeExceptionally(Throwable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "cancel(boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "T"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "T"
 , "c2" : "get(long;TimeUnit)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "T"
 , "c2" : "getNow(T)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "isCancelled()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "isCompletedExceptionally()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "isDone()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/KafkaFuture.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/KafkaFuture.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/KafkaFuture.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class KafkaFuture contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/KafkaFuture.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00024] The class Function contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/KafkaFuture.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method allOf arguments KafkaFuture&lt;? &gt;  ...futures"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/KafkaFuture.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.KafkaFuture.allOf@POLYN181732 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/KafkaFuture.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method whenComplete arguments BiConsumer&lt;? super T ,? super Throwable &gt;  action"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/KafkaFuture.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method complete arguments T  newValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/KafkaFuture.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method completeExceptionally arguments Throwable  newException"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/KafkaFuture.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method cancel arguments boolean  mayInterruptIfRunning"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/KafkaFuture.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method get arguments long  timeout|TimeUnit  unit"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/KafkaFuture.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method getNow arguments T  valueIfAbsent"
}} 
]
};
console.log('leListeStr 99 main end');
