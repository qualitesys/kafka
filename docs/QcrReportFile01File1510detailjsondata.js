console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html" 
 , "texte" : "File server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java 68 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "EventQueue"
 , "c2" : "org.apache.kafka.queue.KafkaEventQueue"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.queue.KafkaEventQueue" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00359"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#359"
 , "c1" : "KafkaEventQueue"
 , "c2" : "KafkaEventQueue(Time;LogContext;String)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00374"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#374"
 , "c1" : "void"
 , "c2" : "enqueue(EventInsertionType;String;Function&lt;OptionalLong,OptionalLong&gt;;Event)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00386"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#386"
 , "c1" : "void"
 , "c2" : "cancelDeferred(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00391"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#391"
 , "c1" : "void"
 , "c2" : "beginShutdown(String;Event;long;TimeUnit)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00416"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#416"
 , "c1" : "void"
 , "c2" : "wakeup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00421"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#421"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "34"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method insertAfter arguments EventContext  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#82"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00082] The argument other is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method insertBefore arguments EventContext  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument other is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#119"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00119] For method run arguments Logger  log"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#119"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00119] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00121] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.queue.KafkaEventQueue.EventContext.run@POLYN203450 the MagicNumber/String  'Unexpected exception in handleException' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method completeWithException arguments Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00174] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.run@POLYN205128 the MagicNumber/String  'event handler thread exiting with exception' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#180"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00180] For method remove arguments EventContext  eventContext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#180"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00180] The argument eventContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.remove@POLYN205428 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.remove@POLYN205428 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00206] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00212] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN206053 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN206053 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN206053 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN206053 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN206053 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN206053 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN206053 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.handleEvents@POLYN206053 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#261"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00261] For method enqueue arguments EventContext  eventContext|Function&lt;OptionalLong ,OptionalLong &gt;  deadlineNsCalculator"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#261"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00261] The argument eventContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#262"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00262] The argument deadlineNsCalculator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN208963 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00272"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN208963 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN208963 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN208963 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN208963 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN208963 the MagicNumber/String  'You must specify a deadline for deferred events.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN208963 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN208963 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.enqueue@POLYN208963 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#323"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00323] For method cancelDeferred arguments String  tag"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.queue.KafkaEventQueue.EventHandler.cancelDeferred@POLYN211638 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#360"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00360] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.queue.KafkaEventQueue.KafkaEventQueue@POLYN212712 the MagicNumber/String  'EventHandler' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.queue.KafkaEventQueue.KafkaEventQueue@POLYN212712 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00369"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00369] In method org.apache.kafka.queue.KafkaEventQueue.KafkaEventQueue@POLYN212712 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#374"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00374] For method enqueue arguments EventInsertionType  insertionType|String  tag|Function&lt;OptionalLong ,OptionalLong &gt;  deadlineNsCalculator|Event  event"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#374"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00374] For method enqueue list of called methods Object monObjet|java.lang.Exception eventHandler_enqueueN213910"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00380"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.queue.KafkaEventQueue.enqueue@POLYN213564 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#386"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00386] For method cancelDeferred arguments String  tag"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#391"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00391] For method beginShutdown arguments String  source|Event  newCleanupEvent|long  timeSpan|TimeUnit  timeUnit"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#392"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00392] The argument timeUnit is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN214305 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN214305 the MagicNumber/String  'beginShutdown must be called with a ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN214305 the MagicNumber/String  'non-negative timeout.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00400"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN214305 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00401"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN214305 the MagicNumber/String  '{}: Event queue is already shutting down.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00404"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN214305 the MagicNumber/String  '{}: shutting down event queue.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00422] In method org.apache.kafka.queue.KafkaEventQueue.close@POLYN215590 the MagicNumber/String  'KafkaEventQueue#close' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00424"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.queue.KafkaEventQueue.close@POLYN215590 the MagicNumber/String  'closed event queue.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN214305"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.queue.KafkaEventQueue.cancelDeferred@POLYN214157"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.queue.KafkaEventQueue.close@POLYN215590"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00393] In the recursive method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN214305 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00394] In the recursive method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN214305 the MagicNumber/String 'beginShutdown must be called with a ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#395"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00395] In the recursive method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN214305 the MagicNumber/String 'non-negative timeout.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00400"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#400"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00400] In the recursive method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN214305 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00401"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#401"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00401] In the recursive method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN214305 the MagicNumber/String '{}: Event queue is already shutting down.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00404"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00404] In the recursive method org.apache.kafka.queue.KafkaEventQueue.beginShutdown@POLYN214305 the MagicNumber/String '{}: shutting down event queue.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#422"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00422] In the recursive method org.apache.kafka.queue.KafkaEventQueue.close@POLYN215590 the MagicNumber/String 'KafkaEventQueue#close' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00424"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.html#424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00424] In the recursive method org.apache.kafka.queue.KafkaEventQueue.close@POLYN215590 the MagicNumber/String 'closed event queue.' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/server-common/src/main/java/org/apache/kafka/queue/KafkaEventQueue.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
