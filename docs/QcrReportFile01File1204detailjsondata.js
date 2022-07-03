console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java 12 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Thread"
 , "c2" : "org.apache.kafka.connect.util.ShutdownableThread"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.util.ShutdownableThread" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ShutdownableThread"
 , "c2" : "ShutdownableThread(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ShutdownableThread"
 , "c2" : "ShutdownableThread(String;boolean)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "execute()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "getRunning()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "shutdown(long;TimeUnit)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "gracefulShutdown(long;TimeUnit)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "startGracefulShutdown()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "awaitShutdown(long;TimeUnit)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "forceShutdown()"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.svg" }

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
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAVCWE500"
 , "c3" : "Static public field not marked final"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00019] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.html#19"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00019] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.connect.util.ShutdownableThread.ShutdownableThread@POLYN182370 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.connect.util.ShutdownableThread.ShutdownableThread@POLYN182511 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.connect.util.ShutdownableThread.run@POLYN183152 the MagicNumber/String  'Thread {} exiting with uncaught exception: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method shutdown arguments long  gracefulTimeout|TimeUnit  unit"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method gracefulShutdown arguments long  timeout|TimeUnit  unit"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.connect.util.ShutdownableThread.startGracefulShutdown@POLYN184453 the MagicNumber/String  'Starting graceful shutdown of thread {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.connect.util.ShutdownableThread.startGracefulShutdown@POLYN184453 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method awaitShutdown arguments long  timeout|TimeUnit  unit"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.connect.util.ShutdownableThread.forceShutdown@POLYN185250 the MagicNumber/String  'Forcing shutdown of thread {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/ShutdownableThread.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.connect.util.ShutdownableThread.forceShutdown@POLYN185250 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
