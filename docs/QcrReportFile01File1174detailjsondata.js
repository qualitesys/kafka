console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java 42 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "StatusBackingStore"
 , "c2" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "MemoryStatusBackingStore"
 , "c2" : "MemoryStatusBackingStore()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(WorkerConfig)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "start()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "put(ConnectorStatus)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putSafe(ConnectorStatus)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "put(TaskStatus)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "putSafe(TaskStatus)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "put(TopicStatus)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TaskStatus"
 , "c2" : "get(ConnectorTaskId)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorStatus"
 , "c2" : "get(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Collection<TaskStatus>"
 , "c2" : "getAll(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopicStatus"
 , "c2" : "getTopic(String;String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Collection<TopicStatus>"
 , "c2" : "getAllTopics(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "deleteTopic(String;String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "connectors()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.connect.storage.MemoryStatusBackingStore.this" }
,
{ "ligne" :  "R1:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN177996.status" }
,
{ "ligne" :  "R2:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN177617.status" }
,
{ "ligne" :  "R3:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN178684.status" }
,
{ "ligne" :  "R4:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN178141.status" }
]
,
"data12b" : [
{ "sequence" : { "noseq" : "0" , "pas" : [
{ "ligne" : "S0:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN177996 (R0 in line [00056],R1 in line [00056])" }
,
{ "ligne" : "S0:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN177617 (R0 in line [00048],R2 in line [00048])" }
,
{ "ligne" : "S0:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN178824" }
 ]
 } }
,
{ "sequence" : { "noseq" : "1" , "pas" : [
{ "ligne" : "S1:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN178684 (R0 in line [00069],R3 in line [00069])" }
,
{ "ligne" : "S1:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN178141 (R0 in line [00061],R4 in line [00061])" }
 ]
 } }
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE833"
 , "c3" : "Potential deadlock between at least two ressources"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class MemoryStatusBackingStore contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method configure arguments WorkerConfig  config"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#48"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00048] Lock statement on synchronized method put"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method put arguments ConnectorStatus  status"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument status is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#56"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00056] Lock statement on synchronized method putSafe"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method putSafe arguments ConnectorStatus  status"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#61"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00061] Lock statement on synchronized method put"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method put arguments TaskStatus  status"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument status is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#69"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00069] Lock statement on synchronized method putSafe"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method putSafe arguments TaskStatus  status"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method put arguments TopicStatus  status"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument status is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#80"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00080] Lock statement on synchronized method get"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method get arguments ConnectorTaskId  id"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#80"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00080] The argument id is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#85"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00085] Lock statement on synchronized method get"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method get arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#90"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00090] Lock statement on synchronized method getAll"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method getAll arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method getTopic arguments String  connector|String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.connect.storage.MemoryStatusBackingStore.getTopic@POLYN179810 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.connect.storage.MemoryStatusBackingStore.getTopic@POLYN179810 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method getAllTopics arguments String  connector"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.connect.storage.MemoryStatusBackingStore.getAllTopics@POLYN180296 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method deleteTopic arguments String  connector|String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.connect.storage.MemoryStatusBackingStore.deleteTopic@POLYN180727 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#117"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00117] Lock statement on synchronized method connectors"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00033] Void method configure is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00033] Void method configure is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00038] Void method start is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00038] Void method start is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00043] Void method stop is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00043] Void method stop is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00122] Void method flush is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00122] Void method flush is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R0 : org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R1 : org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN177996.status"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R2 : org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN177617.status"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R3 : org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN178684.status"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/MemoryStatusBackingStore.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R4 : org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN178141.status"
}} 
]
};
console.log('leListeStr 99 main end');
