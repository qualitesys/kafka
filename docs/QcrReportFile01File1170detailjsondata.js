console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java 18 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "MemoryOffsetBackingStore"
 , "c2" : ""
 , "c2" : "org.apache.kafka.connect.storage.FileOffsetBackingStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.storage.FileOffsetBackingStore" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#45"
 , "c1" : "FileOffsetBackingStore"
 , "c2" : "FileOffsetBackingStore()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#50"
 , "c1" : "void"
 , "c2" : "configure(WorkerConfig)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#56"
 , "c1" : "void"
 , "c2" : "start()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#63"
 , "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#70"
 , "c1" : "void"
 , "c2" : "load()"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#91"
 , "c1" : "void"
 , "c2" : "save()"
 , "c3" : "2"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.svg" }

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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE390"
 , "c3" : "Detection of error condition without action"
 , "c4" : "1"
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
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method configure arguments WorkerConfig  config"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#56"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00056] Lock statement on synchronized method start"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.connect.storage.FileOffsetBackingStore.start@POLYN168883 the MagicNumber/String  'Starting FileOffsetBackingStore with file {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#63"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00063] Lock statement on synchronized method stop"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.connect.storage.FileOffsetBackingStore.stop@POLYN169132 the MagicNumber/String  'Stopped FileOffsetBackingStore' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00079] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00082] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.connect.storage.FileOffsetBackingStore.load@POLYN169341 the MagicNumber/String  'Expected HashMap but found ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.connect.storage.FileOffsetBackingStore.load@POLYN169341 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.connect.storage.FileOffsetBackingStore.load@POLYN169341 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.connect.storage.FileOffsetBackingStore.load@POLYN169341 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.connect.storage.FileOffsetBackingStore.load@POLYN169341 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.connect.storage.FileOffsetBackingStore.save@POLYN170988 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.connect.storage.FileOffsetBackingStore.save@POLYN170988 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.connect.storage.FileOffsetBackingStore.save@POLYN170988 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.connect.storage.FileOffsetBackingStore.save@POLYN170988 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/FileOffsetBackingStore.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
