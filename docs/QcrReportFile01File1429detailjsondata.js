console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java 9 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "MemoryPool"
 , "c2" : "org.apache.kafka.raft.internals.BatchMemoryPool"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.internals.BatchMemoryPool" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#37"
 , "c1" : "BatchMemoryPool"
 , "c2" : "BatchMemoryPool(int;int)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#45"
 , "c1" : "ByteBuffer"
 , "c2" : "tryAllocate(int)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#65"
 , "c1" : "void"
 , "c2" : "release(ByteBuffer)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#82"
 , "c1" : "long"
 , "c2" : "size()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#92"
 , "c1" : "long"
 , "c2" : "availableMemory()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#103"
 , "c1" : "boolean"
 , "c2" : "isOutOfMemory()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method tryAllocate arguments int  sizeBytes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.raft.internals.BatchMemoryPool.tryAllocate@POLYN152066 the MagicNumber/String  'Cannot allocate buffers larger than max ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.raft.internals.BatchMemoryPool.tryAllocate@POLYN152066 the MagicNumber/String  'batch size of ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.raft.internals.BatchMemoryPool.tryAllocate@POLYN152066 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.raft.internals.BatchMemoryPool.tryAllocate@POLYN152066 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method release arguments ByteBuffer  previouslyAllocated"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument previouslyAllocated is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.raft.internals.BatchMemoryPool.release@POLYN152857 the MagicNumber/String  'Released buffer with unexpected size ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.raft.internals.BatchMemoryPool.isOutOfMemory@POLYN154117 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
