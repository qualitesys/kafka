console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java 28 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.raft.internals.BatchBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.internals.BatchBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "BatchBuilder"
 , "c2" : "BatchBuilder(ByteBuffer;RecordSerde<T>;CompressionType;long;long;boolean;int;int)"
 , "c3" : "1"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "appendRecord(T;ObjectSerializationCache)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "OptionalInt"
 , "c2" : "bytesNeeded(Collection<T>;ObjectSerializationCache)"
 , "c3" : "6"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "flushedSizeInBytes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "approximateSizeInBytes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "baseOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "lastOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "numRecords()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "nonEmpty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "initialBuffer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<T>"
 , "c2" : "records()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "writeDefaultBatchHeader()"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "MemoryRecords"
 , "c2" : "build()"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "writeRecord(long;T;ObjectSerializationCache)"
 , "c3" : "1"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "batchHeaderSizeInBytes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "bytesNeededForRecords(Collection<T>;ObjectSerializationCache)"
 , "c3" : "3"
 , "c4" : "8"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
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
 , "c4" : "20"
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
   "c1" : "00026"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00026] The class BatchBuilder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument compressionType is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method appendRecord arguments T  record|ObjectSerializationCache  serializationCache"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.raft.internals.BatchBuilder.appendRecord@POLYN203149 the MagicNumber/String  'Cannot append new records after the batch has been built' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.raft.internals.BatchBuilder.appendRecord@POLYN203149 the MagicNumber/String  'Cannot include more than ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.raft.internals.BatchBuilder.appendRecord@POLYN203149 the MagicNumber/String  ' records in a single batch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method bytesNeeded arguments Collection&lt;T &gt;  records|ObjectSerializationCache  serializationCache"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.raft.internals.BatchBuilder.bytesNeeded@POLYN204315 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.raft.internals.BatchBuilder.bytesNeeded@POLYN204315 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.raft.internals.BatchBuilder.lastOffset@POLYN206169 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.raft.internals.BatchBuilder.nonEmpty@POLYN206645 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.raft.internals.BatchBuilder.writeDefaultBatchHeader@POLYN207256 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.raft.internals.BatchBuilder.writeDefaultBatchHeader@POLYN207256 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.raft.internals.BatchBuilder.build@POLYN208283 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#203"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00203] For method writeRecord arguments long  offset|T  payload|ObjectSerializationCache  serializationCache"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.raft.internals.BatchBuilder.writeRecord@POLYN208798 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.raft.internals.BatchBuilder.writeRecord@POLYN208798 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.raft.internals.BatchBuilder.writeRecord@POLYN208798 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.raft.internals.BatchBuilder.writeRecord@POLYN208798 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.raft.internals.BatchBuilder.writeRecord@POLYN208798 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#247"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00247] For method bytesNeededForRecords arguments Collection&lt;T &gt;  records|ObjectSerializationCache  serializationCache"
}} 
,
{ "ligne" : {
   "c1" : "00248"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#248"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00248] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.raft.internals.BatchBuilder.bytesNeededForRecords@POLYN210310 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.raft.internals.BatchBuilder.bytesNeededForRecords@POLYN210310 the MagicNumber/String  'Adding %s records to a batch with base offset of %s and next offset of %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.raft.internals.BatchBuilder.bytesNeededForRecords@POLYN210310 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.raft.internals.BatchBuilder.bytesNeededForRecords@POLYN210310 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.raft.internals.BatchBuilder.bytesNeededForRecords@POLYN210310 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/BatchBuilder.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00148] Public method nonEmpty is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
