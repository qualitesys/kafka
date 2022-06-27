console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java 10 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "MemoryPool"
 , "c2" : "org.apache.kafka.raft.internals.BatchMemoryPool"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.internals.BatchMemoryPool" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "BatchMemoryPool"
 , "c2" : "BatchMemoryPool(int;int)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "tryAllocate(int)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "release(ByteBuffer)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "size()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "availableMemory()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isOutOfMemory()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.svg" }

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
 , "c4" : "1"
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
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class BatchMemoryPool contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method tryAllocate arguments int  sizeBytes"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.raft.internals.BatchMemoryPool.tryAllocate@POLYN166748 the MagicNumber/String  'Cannot allocate buffers larger than max ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.raft.internals.BatchMemoryPool.tryAllocate@POLYN166748 the MagicNumber/String  'batch size of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.raft.internals.BatchMemoryPool.tryAllocate@POLYN166748 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.raft.internals.BatchMemoryPool.tryAllocate@POLYN166748 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method release arguments ByteBuffer  previouslyAllocated"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument previouslyAllocated is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.raft.internals.BatchMemoryPool.release@POLYN167539 the MagicNumber/String  'Released buffer with unexpected size ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchMemoryPool.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.raft.internals.BatchMemoryPool.isOutOfMemory@POLYN168799 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
