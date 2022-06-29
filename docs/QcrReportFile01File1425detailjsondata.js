console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java 49 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Closeable"
 , "c2" : "org.apache.kafka.raft.internals.BatchAccumulator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.internals.BatchAccumulator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "BatchAccumulator"
 , "c2" : "BatchAccumulator(int;long;int;int;MemoryPool;Time;CompressionType;RecordSerde<T>)"
 , "c3" : "1"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "append(int;List<T>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "appendAtomic(int;List<T>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "append(int;List<T>;boolean)"
 , "c3" : "8"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeResetLinger()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "BatchBuilder<T>"
 , "c2" : "maybeAllocateBatch(Collection<T>;ObjectSerializationCache)"
 , "c3" : "6"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "completeCurrentBatch()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "appendControlMessage(Function<ByteBuffer,MemoryRecords>)"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "appendLeaderChangeMessage(LeaderChangeMessage;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "appendSnapshotHeaderMessage(SnapshotHeaderRecord;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "appendSnapshotFooterMessage(SnapshotFooterRecord;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "forceDrain()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeCompleteDrain()"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "startNewBatch()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "needsDrain(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "timeUntilDrain(long)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "epoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<CompletedBatch<T>>"
 , "c2" : "drain()"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "List<CompletedBatch<T>>"
 , "c2" : "drainCompleted()"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isEmpty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "numCompletedBatches()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
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
 , "c4" : "29"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00031] The class BatchAccumulator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method append arguments int  epoch|List&lt;T &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN231584 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method appendAtomic arguments int  epoch|List&lt;T &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.raft.internals.BatchAccumulator.appendAtomic@POLYN232312 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method append arguments int  epoch|List&lt;T &gt;  records|boolean  isAtomic"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN232543 the MagicNumber/String  'Append failed because the epoch doesn't match' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN232543 the MagicNumber/String  'Attempt to append from epoch ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN232543 the MagicNumber/String  ' which is larger than the current epoch ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN232543 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN232543 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN232543 the MagicNumber/String  'Append failed because we failed to allocate memory to write the batch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN232543 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN232543 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#133"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00133] For method maybeAllocateBatch arguments Collection&lt;T &gt;  records|ObjectSerializationCache  serializationCache"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.raft.internals.BatchAccumulator.maybeAllocateBatch@POLYN234512 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.raft.internals.BatchAccumulator.maybeAllocateBatch@POLYN234512 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.raft.internals.BatchAccumulator.maybeAllocateBatch@POLYN234512 the MagicNumber/String  'The total record(s) size of %d exceeds the maximum allowed batch size of %d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.raft.internals.BatchAccumulator.completeCurrentBatch@POLYN235439 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#173"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00173] For method appendControlMessage arguments Function&lt;ByteBuffer ,MemoryRecords &gt;  valueCreator"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#173"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00173] The argument valueCreator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.raft.internals.BatchAccumulator.appendControlMessage@POLYN236120 the MagicNumber/String  256 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.raft.internals.BatchAccumulator.appendControlMessage@POLYN236120 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.raft.internals.BatchAccumulator.appendControlMessage@POLYN236120 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.raft.internals.BatchAccumulator.appendControlMessage@POLYN236120 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.raft.internals.BatchAccumulator.appendControlMessage@POLYN236120 the MagicNumber/String  'Could not allocate buffer for the control record' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#204"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00204] For method appendLeaderChangeMessage arguments LeaderChangeMessage  leaderChangeMessage|long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#221"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00221] For method appendSnapshotHeaderMessage arguments SnapshotHeaderRecord  snapshotHeaderRecord|long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#237"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00237] For method appendSnapshotFooterMessage arguments SnapshotFooterRecord  snapshotFooterRecord|long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.raft.internals.BatchAccumulator.maybeCompleteDrain@POLYN238910 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.raft.internals.BatchAccumulator.startNewBatch@POLYN239336 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.raft.internals.BatchAccumulator.startNewBatch@POLYN239336 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#291"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00291] For method needsDrain arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.raft.internals.BatchAccumulator.needsDrain@POLYN239970 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#296"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00296] For method timeUntilDrain arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.raft.internals.BatchAccumulator.timeUntilDrain@POLYN240312 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00337] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.raft.internals.BatchAccumulator.drainCompleted@POLYN242055 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method org.apache.kafka.raft.internals.BatchAccumulator.drainCompleted@POLYN242055 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00364] The class CompletedBatch contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#376"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00376] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#377"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00377] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method org.apache.kafka.raft.internals.BatchAccumulator.CompletedBatch.CompletedBatch@POLYN243544 the MagicNumber/String  'Expected memory records to contain one batch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00394"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#394"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00394] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.raft.internals.BatchAccumulator.CompletedBatch.CompletedBatch@POLYN244283 the MagicNumber/String  'Expected memory records to contain one batch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00424"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00424] The class SimpleTimer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#433"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00433] For method reset arguments long  deadlineMs"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#437"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00437] For method remainingMs arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchAccumulator.java.html#438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00438] In method org.apache.kafka.raft.internals.BatchAccumulator.SimpleTimer.remainingMs@POLYN245739 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
