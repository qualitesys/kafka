console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java 23 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.xml" 
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
 , "c1" : "boolean"
 , "c2" : "hasMatchingMagic(byte)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "RecordBatch"
 , "c2" : "firstBatch()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Iterable<Record>"
 , "c2" : "records()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "DefaultRecordsSend<Records>"
 , "c2" : "toSend()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Iterator<Record>"
 , "c2" : "recordsIterator()"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "int"
 , "c2" : "estimateSizeInBytes(byte;long;CompressionType;Iterable<Record>)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "int"
 , "c2" : "estimateSizeInBytes(byte;CompressionType;Iterable<SimpleRecord>)"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "int"
 , "c2" : "estimateCompressedSizeInBytes(int;CompressionType)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "int"
 , "c2" : "estimateSizeInBytesUpperBound(byte;CompressionType;byte[];byte[];Header[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "int"
 , "c2" : "estimateSizeInBytesUpperBound(byte;CompressionType;ByteBuffer;ByteBuffer;Header[])"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
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
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class AbstractRecords contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#16"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00016] For method hasMatchingMagic arguments byte  magic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.common.record.AbstractRecords.hasMatchingMagic@POLYN162418 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.common.record.AbstractRecords.hasMatchingMagic@POLYN162418 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00023] For method firstBatch list of called methods Object monObjet|Iterable&lt;? extends RecordBatch&gt; batchesN162812"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.common.record.AbstractRecords.firstBatch@POLYN162710 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00043] For method recordsIterator list of called methods Object monObjet|Iterable&lt;? extends RecordBatch&gt; batchesN163599"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.common.record.AbstractRecords.recordsIterator@POLYN163408 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method estimateSizeInBytes arguments byte  magic|long  baseOffset|CompressionType  compressionType|Iterable&lt;Record &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00063] For method estimateSizeInBytes list of called methods Object monObjet|int DefaultRecordBatch_sizeInBytesN164827"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.record.AbstractRecords.estimateSizeInBytes@POLYN164214 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method estimateSizeInBytes arguments byte  magic|CompressionType  compressionType|Iterable&lt;SimpleRecord &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00077] For method estimateSizeInBytes list of called methods Object monObjet|int DefaultRecordBatch_sizeInBytesN165603"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.record.AbstractRecords.estimateSizeInBytes@POLYN165015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method estimateCompressedSizeInBytes arguments int  size|CompressionType  compressionType"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.record.AbstractRecords.estimateCompressedSizeInBytes@POLYN165769 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.record.AbstractRecords.estimateCompressedSizeInBytes@POLYN165769 the MagicNumber/String  1024 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.record.AbstractRecords.estimateCompressedSizeInBytes@POLYN165769 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.record.AbstractRecords.estimateCompressedSizeInBytes@POLYN165769 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method estimateSizeInBytesUpperBound arguments byte  magic|CompressionType  compressionType|byte[]  key|byte[]  value|Header[]  headers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method estimateSizeInBytesUpperBound arguments byte  magic|CompressionType  compressionType|ByteBuffer  key|ByteBuffer  value|Header[]  headers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method recordBatchHeaderSizeInBytes arguments byte  magic|CompressionType  compressionType"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/AbstractRecords.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.record.AbstractRecords.recordBatchHeaderSizeInBytes@POLYN167877 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
