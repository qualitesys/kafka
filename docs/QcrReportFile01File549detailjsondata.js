console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java 22 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Records"
 , "c2" : "org.apache.kafka.common.record.AbstractRecords"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.AbstractRecords" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#31"
 , "c1" : "boolean"
 , "c2" : "hasMatchingMagic(byte)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#38"
 , "c1" : "RecordBatch"
 , "c2" : "firstBatch()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#52"
 , "c1" : "Iterable&lt;Record&gt;"
 , "c2" : "records()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#57"
 , "c1" : "DefaultRecordsSend&lt;Records&gt;"
 , "c2" : "toSend()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#61"
 , "c1" : "Iterator&lt;Record&gt;"
 , "c2" : "recordsIterator()"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#81"
 , "c1" : "int"
 , "c2" : "estimateSizeInBytes(byte;long;CompressionType;Iterable&lt;Record&gt;)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#95"
 , "c1" : "int"
 , "c2" : "estimateSizeInBytes(byte;CompressionType;Iterable&lt;SimpleRecord&gt;)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00108"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#108"
 , "c1" : "int"
 , "c2" : "estimateCompressedSizeInBytes(int;CompressionType)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00116"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#116"
 , "c1" : "int"
 , "c2" : "estimateSizeInBytesUpperBound(byte;CompressionType;byte[];byte[];Header[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00124"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#124"
 , "c1" : "int"
 , "c2" : "estimateSizeInBytesUpperBound(byte;CompressionType;ByteBuffer;ByteBuffer;Header[])"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00141"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#141"
 , "c1" : "int"
 , "c2" : "recordBatchHeaderSizeInBytes(byte;CompressionType)"
 , "c3" : "5"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.svg" }

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
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method hasMatchingMagic arguments byte  magic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.common.record.AbstractRecords.hasMatchingMagic@POLYN164406 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.common.record.AbstractRecords.hasMatchingMagic@POLYN164406 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00038] For method firstBatch list of called methods Object monObjet|Iterable batchesN164800"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.common.record.AbstractRecords.firstBatch@POLYN164698 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00061] For method recordsIterator list of called methods Object monObjet|Iterable batchesN165587"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.common.record.AbstractRecords.recordsIterator@POLYN165396 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method estimateSizeInBytes arguments byte  magic|long  baseOffset|CompressionType  compressionType|Iterable&lt;Record &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00081] For method estimateSizeInBytes list of called methods Object monObjet|int DefaultRecordBatch_sizeInBytesN166815"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.common.record.AbstractRecords.estimateSizeInBytes@POLYN166202 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method estimateSizeInBytes arguments byte  magic|CompressionType  compressionType|Iterable&lt;SimpleRecord &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00095] For method estimateSizeInBytes list of called methods Object monObjet|int DefaultRecordBatch_sizeInBytesN167591"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.common.record.AbstractRecords.estimateSizeInBytes@POLYN167003 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method estimateCompressedSizeInBytes arguments int  size|CompressionType  compressionType"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.record.AbstractRecords.estimateCompressedSizeInBytes@POLYN167757 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.record.AbstractRecords.estimateCompressedSizeInBytes@POLYN167757 the MagicNumber/String  1024 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.record.AbstractRecords.estimateCompressedSizeInBytes@POLYN167757 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.record.AbstractRecords.estimateCompressedSizeInBytes@POLYN167757 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method estimateSizeInBytesUpperBound arguments byte  magic|CompressionType  compressionType|byte[]  key|byte[]  value|Header[]  headers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#124"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00124] For method estimateSizeInBytesUpperBound arguments byte  magic|CompressionType  compressionType|ByteBuffer  key|ByteBuffer  value|Header[]  headers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method recordBatchHeaderSizeInBytes arguments byte  magic|CompressionType  compressionType"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.common.record.AbstractRecords.recordBatchHeaderSizeInBytes@POLYN169853 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
