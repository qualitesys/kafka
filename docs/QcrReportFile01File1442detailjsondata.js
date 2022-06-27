console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java 11 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SnapshotWriter<T>"
 , "c2" : "org.apache.kafka.snapshot.RecordsSnapshotWriter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.snapshot.RecordsSnapshotWriter" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "RecordsSnapshotWriter"
 , "c2" : "RecordsSnapshotWriter(RawSnapshotWriter;int;MemoryPool;Time;long;CompressionType;RecordSerde<T>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initializeSnapshotWithHeader()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "finalizeSnapshotWithFooter()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "OffsetAndEpoch"
 , "c2" : "snapshotId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "lastContainedLogOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "lastContainedLogEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isFrozen()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "append(List<T>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "freeze()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "appendBatches(List<CompletedBatch<T>>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
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
   "c1" : "00020"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00020] The class RecordsSnapshotWriter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument snapshot is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.snapshot.RecordsSnapshotWriter.RecordsSnapshotWriter@POLYN181882 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.snapshot.RecordsSnapshotWriter.initializeSnapshotWithHeader@POLYN182702 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.snapshot.RecordsSnapshotWriter.initializeSnapshotWithHeader@POLYN182702 the MagicNumber/String  'Initializing writer with a non-empty snapshot: id = '%s'.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.html#78"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00078] The argument supplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.snapshot.RecordsSnapshotWriter.lastContainedLogOffset@POLYN185117 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method append arguments List&lt;T &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN185517 the MagicNumber/String  'Append not supported. Snapshot is already frozen: id = '%s'.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00153] For method appendBatches arguments List&lt;CompletedBatch&lt;T &gt; &gt;  batches"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotWriter.java.html#153"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00153] The argument batches is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
