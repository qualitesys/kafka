console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java 28 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "RawSnapshotWriter"
 , "c2" : "org.apache.kafka.snapshot.FileRawSnapshotWriter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.snapshot.FileRawSnapshotWriter" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "FileRawSnapshotWriter"
 , "c2" : "FileRawSnapshotWriter(Path;FileChannel;OffsetAndEpoch;Optional<ReplicatedLog>)"
 , "c3" : "1"
 , "c4" : "4"
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
 , "c2" : "sizeInBytes()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "append(UnalignedMemoryRecords)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "append(MemoryRecords)"
 , "c3" : "1"
 , "c4" : "3"
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
 , "c2" : "freeze()"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "checkIfFrozen(String)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "FileRawSnapshotWriter"
 , "c2" : "create(Path;OffsetAndEpoch;Optional<ReplicatedLog>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
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
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00018] The class FileRawSnapshotWriter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.sizeInBytes@POLYN173984 the MagicNumber/String  'Error calculating snapshot size. temp path = %s, snapshotId = %s.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method append arguments UnalignedMemoryRecords  records"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.append@POLYN174342 the MagicNumber/String  'Append' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.append@POLYN174342 the MagicNumber/String  'Error writing file snapshot, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.append@POLYN174342 the MagicNumber/String  'temp path = %s, snapshotId = %s.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method append arguments MemoryRecords  records"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#72"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00072] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.append@POLYN174887 the MagicNumber/String  'Append' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.append@POLYN174887 the MagicNumber/String  'Error writing file snapshot, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.append@POLYN174887 the MagicNumber/String  'temp path = %s, snapshotId = %s.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.freeze@POLYN175532 the MagicNumber/String  'Freeze' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.freeze@POLYN175532 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.freeze@POLYN175532 the MagicNumber/String  'Unable to set file (%s) as read-only' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.freeze@POLYN175532 the MagicNumber/String  'Error freezing file snapshot, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.freeze@POLYN175532 the MagicNumber/String  'temp path = %s, snapshotId = %s.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.close@POLYN176620 the MagicNumber/String  'Error closing snapshot writer, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.close@POLYN176620 the MagicNumber/String  'temp path = %s, snapshotId %s.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.toString@POLYN177096 the MagicNumber/String  'FileRawSnapshotWriter(path=%s, snapshotId=%s, frozen=%s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method checkIfFrozen arguments String  operation"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.checkIfFrozen@POLYN177276 the MagicNumber/String  '%s is not supported. Snapshot is already frozen: id = %s; temp path = %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00154] For method create arguments Path  logDir|OffsetAndEpoch  snapshotId|Optional&lt;ReplicatedLog &gt;  replicatedLog"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00154] For method create list of called methods Object monObjet|java.nio.file.Path Snapshots_createTempFileN177887"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.snapshot.FileRawSnapshotWriter.create@POLYN177719 the MagicNumber/String  'Error creating snapshot writer. path = %s, snapshotId %s.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.snapshot.FileRawSnapshotWriter.close@POLYN176620"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00123] In the recursive method org.apache.kafka.snapshot.FileRawSnapshotWriter.close@POLYN176620 the MagicNumber/String 'Error closing snapshot writer, ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotWriter.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method org.apache.kafka.snapshot.FileRawSnapshotWriter.close@POLYN176620 the MagicNumber/String 'temp path = %s, snapshotId %s.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
