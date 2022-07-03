console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java 22 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "KafkaFuture<T>"
 , "c2" : "org.apache.kafka.common.internals.KafkaFutureImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.internals.KafkaFutureImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KafkaFutureImpl"
 , "c2" : "KafkaFutureImpl()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFutureImpl"
 , "c2" : "KafkaFutureImpl(boolean;KafkaCompletableFuture<T>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "CompletionStage<T>"
 , "c2" : "toCompletionStage()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KafkaFuture<T>"
 , "c2" : "whenComplete(BiConsumer<?superT,?superThrowable>)"
 , "c3" : "3"
 , "c4" : "5"
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
   "c1" : "boolean"
 , "c2" : "cancel(boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeThrowCancellationException(Throwable)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "T"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "T"
 , "c2" : "get(long;TimeUnit)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "T"
 , "c2" : "getNow(T)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isCancelled()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isCompletedExceptionally()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isDone()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.common.internals.KafkaFutureImpl.KafkaFutureImpl@POLYN192715 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#37"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00037] The argument function is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.common.internals.KafkaFutureImpl the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument completableFuture is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.internals.KafkaFutureImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method whenComplete arguments BiConsumer&lt;? super T ,? super Throwable &gt;  biConsumer"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument biConsumer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.common.internals.KafkaFutureImpl.whenComplete@POLYN195271 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method complete arguments T  newValue"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method completeExceptionally arguments Throwable  newException"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method cancel arguments boolean  mayInterruptIfRunning"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method maybeThrowCancellationException arguments Throwable  cause"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method get arguments long  timeout|TimeUnit  unit"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00149] For method getNow arguments T  valueIfAbsent"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.common.internals.KafkaFutureImpl.isCancelled@POLYN198831 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.common.internals.KafkaFutureImpl.isCancelled@POLYN198831 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.common.internals.KafkaFutureImpl.toString@POLYN199669 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.common.internals.KafkaFutureImpl.toString@POLYN199669 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.common.internals.KafkaFutureImpl.toString@POLYN199669 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.common.internals.KafkaFutureImpl.toString@POLYN199669 the MagicNumber/String  'KafkaFuture{value=%s,exception=%s,done=%b}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.common.internals.KafkaFutureImpl.toString@POLYN199669 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/KafkaFutureImpl.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.common.internals.KafkaFutureImpl.toString@POLYN199669 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
