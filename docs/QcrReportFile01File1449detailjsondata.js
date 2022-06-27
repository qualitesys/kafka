console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html" 
 , "texte" : "File server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java 72 rule violations " 
 , "fic2"  : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "EventQueue"
 , "c2" : "org.apache.kafka.queue.KafkaEventQueue"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.queue.KafkaEventQueue" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "KafkaEventQueue"
 , "c2" : "KafkaEventQueue(Time;LogContext;String)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "enqueue(EventInsertionType;String;Function<OptionalLong,OptionalLong>;Event)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "cancelDeferred(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "beginShutdown(String;Event;long;TimeUnit)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "wakeup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.png" 

 , "ligneplantuml" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "34"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00022] The class KafkaEventQueue contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00024] The class EventContext contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method insertAfter arguments EventContext  other"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument other is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method insertBefore arguments EventContext  other"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument other is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method run arguments Logger  log"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#79"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00079] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00081] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.queue.KafkaEventQueue.EventContext.run@POLYN211610 the MagicNumber/String  'Unexpected exception in handleException' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method completeWithException arguments Throwable  t"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00104] The class EventHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00121] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.run@POLYN213288 the MagicNumber/String  'event handler thread exiting with exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00127] For method remove arguments EventContext  eventContext"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#127"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00127] The argument eventContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.remove@POLYN213588 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.remove@POLYN213588 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00153] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00159] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN214213 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN214213 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN214213 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN214213 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN214213 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN214213 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN214213 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN214213 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#208"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00208] For method enqueue arguments EventContext  eventContext|Function&lt;OptionalLong ,OptionalLong &gt;  deadlineNsCalculator"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#208"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00208] The argument eventContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#209"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00209] The argument deadlineNsCalculator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN217107 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN217107 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN217107 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN217107 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN217107 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN217107 the MagicNumber/String  'You must specify a deadline for deferred events.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN217107 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN217107 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN217107 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#270"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00270] For method cancelDeferred arguments String  tag"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.cancelDeferred@POLYN219766 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#304"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00304] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method org.apache.kafka.queue.KafkaEventQueue.KafkaEventQueue@POLYN220838 the MagicNumber/String  'EventHandler' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.queue.KafkaEventQueue.KafkaEventQueue@POLYN220838 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.queue.KafkaEventQueue.KafkaEventQueue@POLYN220838 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#318"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00318] For method enqueue arguments EventInsertionType  insertionType|String  tag|Function&lt;OptionalLong ,OptionalLong &gt;  deadlineNsCalculator|Event  event"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.queue.KafkaEventQueue.enqueue@POLYN221690 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#330"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00330] For method cancelDeferred arguments String  tag"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#335"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00335] For method beginShutdown arguments String  source|Event  newCleanupEvent|long  timeSpan|TimeUnit  timeUnit"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#336"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00336] The argument timeUnit is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN222427 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN222427 the MagicNumber/String  'beginShutdown must be called with a ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00339"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN222427 the MagicNumber/String  'non-negative timeout.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN222427 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN222427 the MagicNumber/String  '{}: Event queue is already shutting down.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN222427 the MagicNumber/String  '{}: shutting down event queue.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.queue.KafkaEventQueue.close@POLYN223710 the MagicNumber/String  'KafkaEventQueue#close' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.queue.KafkaEventQueue.close@POLYN223710 the MagicNumber/String  'closed event queue.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN222427"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.queue.KafkaEventQueue.cancelDeferred@POLYN222279"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.queue.KafkaEventQueue.close@POLYN223710"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.queue.KafkaEventQueue.enqueue@POLYN221690"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#337"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00337] In the recursive method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN222427 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#338"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00338] In the recursive method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN222427 the MagicNumber/String 'beginShutdown must be called with a ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00339"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#339"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00339] In the recursive method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN222427 the MagicNumber/String 'non-negative timeout.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#344"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00344] In the recursive method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN222427 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#345"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00345] In the recursive method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN222427 the MagicNumber/String '{}: Event queue is already shutting down.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#348"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00348] In the recursive method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN222427 the MagicNumber/String '{}: shutting down event queue.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#366"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00366] In the recursive method org.apache.kafka.queue.KafkaEventQueue.close@POLYN223710 the MagicNumber/String 'KafkaEventQueue#close' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#368"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00368] In the recursive method org.apache.kafka.queue.KafkaEventQueue.close@POLYN223710 the MagicNumber/String 'closed event queue.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#324"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00324] In the recursive method org.apache.kafka.queue.KafkaEventQueue.enqueue@POLYN221690 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
