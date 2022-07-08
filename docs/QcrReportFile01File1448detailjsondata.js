console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html" 
 , "texte" : "File server-common/src/main/java/org/apache/kafka/queue/EventQueue.java 14 rule violations " 
 , "fic2"  : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.queue.EventQueue"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.queue.EventQueue" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "prepend(Event)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "append(Event)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "appendWithDeadline(long;Event)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "scheduleDeferred(String;Function<OptionalLong,OptionalLong>;Event)"
 , "c3" : "1"
 , "c4" : "1"
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
 , "c2" : "enqueue(EventInsertionType;String;Function<OptionalLong,OptionalLong>;Event)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "beginShutdown(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "beginShutdown(String;Event)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "beginShutdown(String;Event;long;TimeUnit)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "wakeup()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
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
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00022] The class FailureLoggingEvent contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method handleException arguments Throwable  e"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.queue.EventQueue.FailureLoggingEvent.handleException@POLYN178494 the MagicNumber/String  'Not processing {} because the event queue is closed.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.queue.EventQueue.FailureLoggingEvent.handleException@POLYN178494 the MagicNumber/String  'Unexpected error handling {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00044] The class NoDeadlineFunction contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method apply arguments OptionalLong  ignored"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00053] The class DeadlineFunction contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method apply arguments OptionalLong  ignored"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00066] The class EarliestDeadlineFunction contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method apply arguments OptionalLong  prevDeadlineNs"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument prevDeadlineNs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00085] The class VoidEvent contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00089] Void method run is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/queue/EventQueue.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00089] Void method run is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
