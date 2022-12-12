console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html" 
 , "texte" : "File server-common/src/main/java/org/apache/kafka/queue/EventQueue.java 12 rule violations " 
 , "fic2"  : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.queue.EventQueue"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.queue.EventQueue" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#94"
 , "c1" : "void"
 , "c2" : "prepend(Event)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00099"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#99"
 , "c1" : "void"
 , "c2" : "append(Event)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#104"
 , "c1" : "void"
 , "c2" : "appendWithDeadline(long;Event)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#109"
 , "c1" : "void"
 , "c2" : "scheduleDeferred(String;Function<OptionalLong,OptionalLong>;Event)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00116"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#116"
 , "c1" : "void"
 , "c2" : "cancelDeferred(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#125"
 , "c1" : "void"
 , "c2" : "enqueue(EventInsertionType;String;Function<OptionalLong,OptionalLong>;Event)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00131"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#131"
 , "c1" : "void"
 , "c2" : "beginShutdown(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00136"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#136"
 , "c1" : "void"
 , "c2" : "beginShutdown(String;Event)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00141"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#141"
 , "c1" : "void"
 , "c2" : "beginShutdown(String;Event;long;TimeUnit)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00144"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#144"
 , "c1" : "void"
 , "c2" : "wakeup()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00147"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#147"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.png" 

 , "ligneplantuml" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method handleException arguments Throwable  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.queue.EventQueue.FailureLoggingEvent.handleException@POLYN178638 the MagicNumber/String  'Not processing {} because the event queue is closed.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.queue.EventQueue.FailureLoggingEvent.handleException@POLYN178638 the MagicNumber/String  'Unexpected error handling {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method apply arguments OptionalLong  ignored"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method apply arguments OptionalLong  ignored"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method apply arguments OptionalLong  prevDeadlineNs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument prevDeadlineNs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00089] Void method run is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00089] Void method run is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.queue.EventQueue.FailureLoggingEvent.handleException@POLYN178638"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#32"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00032] In the recursive method org.apache.kafka.queue.EventQueue.FailureLoggingEvent.handleException@POLYN178638 the MagicNumber/String 'Not processing {} because the event queue is closed.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#34"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00034] In the recursive method org.apache.kafka.queue.EventQueue.FailureLoggingEvent.handleException@POLYN178638 the MagicNumber/String 'Unexpected error handling {}' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
