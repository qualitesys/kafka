console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java 132 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractRecordBatchMutableRecordBatch"
 , "c2" : "org.apache.kafka.common.record.DefaultRecordBatch"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.DefaultRecordBatch" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "DefaultRecordBatch"
 , "c2" : "DefaultRecordBatch(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte"
 , "c2" : "magic()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "ensureValid()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "baseTimestamp()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "maxTimestamp()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TimestampType"
 , "c2" : "timestampType()"
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
   "c1" : "long"
 , "c2" : "producerId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "short"
 , "c2" : "producerEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "baseSequence()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "lastOffsetDelta()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "lastSequence()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "CompressionType"
 , "c2" : "compressionType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "sizeInBytes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "count()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Integer"
 , "c2" : "countOrNull()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "writeTo(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "writeTo(ByteBufferOutputStream)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isTransactional()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasDeleteHorizonMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OptionalLong"
 , "c2" : "deleteHorizonMs()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isControlBatch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "partitionLeaderEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "DataInputStream"
 , "c2" : "recordInputStream(BufferSupplier)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "CloseableIterator<Record>"
 , "c2" : "compressedIterator(BufferSupplier;boolean)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "CloseableIterator<Record>"
 , "c2" : "uncompressedIterator()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Iterator<Record>"
 , "c2" : "iterator()"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "CloseableIterator<Record>"
 , "c2" : "skipKeyValueIterator(BufferSupplier)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "CloseableIterator<Record>"
 , "c2" : "streamingIterator(BufferSupplier)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setLastOffset(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setMaxTimestamp(TimestampType;long)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setPartitionLeaderEpoch(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "checksum()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isValid()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "computeChecksum()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte"
 , "c2" : "attributes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte"
 , "c2" : "computeAttributes(CompressionType;TimestampType;boolean;boolean;boolean)"
 , "c3" : "6"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "writeEmptyHeader(ByteBuffer;byte;long;short;int;long;long;int;TimestampType;long;boolean;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "writeHeader(ByteBuffer;long;int;int;byte;CompressionType;TimestampType;long;long;long;short;int;boolean;boolean;boolean;int;int)"
 , "c3" : "3"
 , "c4" : "19"
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
   "c1" : "int"
 , "c2" : "sizeInBytes(long;Iterable<Record>)"
 , "c3" : "4"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "sizeInBytes(Iterable<SimpleRecord>)"
 , "c3" : "4"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "estimateBatchSizeUpperBound(ByteBuffer;ByteBuffer;Header[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "incrementSequence(int;int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "decrementSequence(int;int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.svg" }

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
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
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
 , "c4" : "64"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.common.record.DefaultRecordBatch.ensureValid@POLYN274956 the MagicNumber/String  'Record batch is corrupt (the size ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.record.DefaultRecordBatch.ensureValid@POLYN274956 the MagicNumber/String  ' is smaller than the minimum allowed overhead ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.record.DefaultRecordBatch.ensureValid@POLYN274956 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.record.DefaultRecordBatch.ensureValid@POLYN274956 the MagicNumber/String  'Record is corrupt (stored crc = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.record.DefaultRecordBatch.ensureValid@POLYN274956 the MagicNumber/String  ', computed crc = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.record.DefaultRecordBatch.ensureValid@POLYN274956 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.common.record.DefaultRecordBatch.timestampType@POLYN275876 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00135] For method lastSequence list of called methods Object monObjet|int baseSequenceN277018"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method writeTo arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#162"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00162] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method writeTo arguments ByteBufferOutputStream  outputStream"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#167"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00167] The argument outputStream is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.common.record.DefaultRecordBatch.isTransactional@POLYN278207 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.record.DefaultRecordBatch.hasDeleteHorizonMs@POLYN278373 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.common.record.DefaultRecordBatch.isControlBatch@POLYN278831 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#198"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00198] For method recordInputStream arguments BufferSupplier  bufferSupplier"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#204"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00204] For method compressedIterator arguments BufferSupplier  bufferSupplier|boolean  skipKeyValue"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#204"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00204] For method compressedIterator list of called methods Object monObjet|org.apache.kafka.common.utils.CloseableIterator&lt;org.apache.kafka.common.record.Record&gt; recordInputStreamN279698"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.common.record.DefaultRecordBatch.uncompressedIterator@POLYN280807 the MagicNumber/String  'Incorrect declared batch size, premature EOF reached' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.common.record.DefaultRecordBatch.iterator@POLYN281767 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.common.record.DefaultRecordBatch.iterator@POLYN281767 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#268"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00268] For method skipKeyValueIterator arguments BufferSupplier  bufferSupplier"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.common.record.DefaultRecordBatch.skipKeyValueIterator@POLYN282573 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.common.record.DefaultRecordBatch.skipKeyValueIterator@POLYN282573 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#283"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00283] For method streamingIterator arguments BufferSupplier  bufferSupplier"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.common.record.DefaultRecordBatch.streamingIterator@POLYN283212 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#291"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00291] For method setLastOffset arguments long  offset"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#296"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00296] For method setMaxTimestamp arguments TimestampType  timestampType|long  maxTimestamp"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#310"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00310] For method setPartitionLeaderEpoch arguments int  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00333"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#333"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00333] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00336] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.common.record.DefaultRecordBatch.equals@POLYN285444 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.common.record.DefaultRecordBatch.equals@POLYN285444 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.common.record.DefaultRecordBatch.equals@POLYN285444 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.common.record.DefaultRecordBatch.hashCode@POLYN285967 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.common.record.DefaultRecordBatch.hashCode@POLYN285967 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#348"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00348] For method computeAttributes arguments CompressionType  type|TimestampType  timestampType|boolean  isTransactional|boolean  isControl|boolean  isDeleteHorizonSet"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#348"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00348] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.common.record.DefaultRecordBatch.computeAttributes@POLYN286148 the MagicNumber/String  'Timestamp type must be provided to compute attributes for message ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00352"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.common.record.DefaultRecordBatch.computeAttributes@POLYN286148 the MagicNumber/String  'format v2 and above' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.common.record.DefaultRecordBatch.computeAttributes@POLYN286148 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.common.record.DefaultRecordBatch.computeAttributes@POLYN286148 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00366"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#366"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00366] For method writeEmptyHeader arguments ByteBuffer  buffer|byte  magic|long  producerId|short  producerEpoch|int  baseSequence|long  baseOffset|long  lastOffset|int  partitionLeaderEpoch|TimestampType  timestampType|long  timestamp|boolean  isTransactional|boolean  isControlRecord"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method org.apache.kafka.common.record.DefaultRecordBatch.writeEmptyHeader@POLYN287059 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method org.apache.kafka.common.record.DefaultRecordBatch.writeEmptyHeader@POLYN287059 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#384"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00384] For method writeHeader arguments ByteBuffer  buffer|long  baseOffset|int  lastOffsetDelta|int  sizeInBytes|byte  magic|CompressionType  compressionType|TimestampType  timestampType|long  baseTimestamp|long  maxTimestamp|long  producerId|short  epoch|int  sequence|boolean  isTransactional|boolean  isControlBatch|boolean  isDeleteHorizonSet|int  partitionLeaderEpoch|int  numRecords"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#384"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00384] For method writeHeader list of called methods Object monObjet|long Crc32C_computeN290463"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#384"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00384] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN287963 the MagicNumber/String  'Invalid magic value ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00403"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN287963 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN287963 the MagicNumber/String  'Invalid message timestamp ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN290842 the MagicNumber/String  'RecordBatch(magic=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN290842 the MagicNumber/String  ', offsets=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN290842 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN290842 the MagicNumber/String  '], ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN290842 the MagicNumber/String  'sequence=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN290842 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN290842 the MagicNumber/String  '], ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN290842 the MagicNumber/String  'isTransactional=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN290842 the MagicNumber/String  ', isControlBatch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN290842 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN290842 the MagicNumber/String  'compression=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN290842 the MagicNumber/String  ', timestampType=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN290842 the MagicNumber/String  ', crc=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN290842 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#434"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00434] For method sizeInBytes arguments long  baseOffset|Iterable&lt;Record &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#434"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00434] For method sizeInBytes list of called methods Object monObjet|int record_timestampN292375|int record_timestampN292450|int DefaultRecord_sizeInBytesN292546"
}} 
,
{ "ligne" : {
   "c1" : "00434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#434"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00434] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00442] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.common.record.DefaultRecordBatch.sizeInBytes@POLYN291587 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.common.record.DefaultRecordBatch.sizeInBytes@POLYN291587 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00444"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.apache.kafka.common.record.DefaultRecordBatch.sizeInBytes@POLYN291587 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00453"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#453"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00453] For method sizeInBytes arguments Iterable&lt;SimpleRecord &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00453"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#453"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00453] For method sizeInBytes list of called methods Object monObjet|int record_timestampN293489|int record_timestampN293564|int DefaultRecord_sizeInBytesN293660"
}} 
,
{ "ligne" : {
   "c1" : "00453"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#453"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00453] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00462"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00462] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#456"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00456] In method org.apache.kafka.common.record.DefaultRecordBatch.sizeInBytes@POLYN292807 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00459"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00459] In method org.apache.kafka.common.record.DefaultRecordBatch.sizeInBytes@POLYN292807 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#460"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00460] In method org.apache.kafka.common.record.DefaultRecordBatch.sizeInBytes@POLYN292807 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00463"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00463] In method org.apache.kafka.common.record.DefaultRecordBatch.sizeInBytes@POLYN292807 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#473"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00473] For method estimateBatchSizeUpperBound arguments ByteBuffer  key|ByteBuffer  value|Header[]  headers"
}} 
,
{ "ligne" : {
   "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#477"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00477] For method incrementSequence arguments int  sequence|int  increment"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#479"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00479] In method org.apache.kafka.common.record.DefaultRecordBatch.incrementSequence@POLYN294353 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00483"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#483"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00483] For method decrementSequence arguments int  sequence|int  decrement"
}} 
,
{ "ligne" : {
   "c1" : "00485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00485] In method org.apache.kafka.common.record.DefaultRecordBatch.decrementSequence@POLYN294730 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00489"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#489"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00489] The class RecordIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#498"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.common.record.DefaultRecordBatch.RecordIterator.RecordIterator@POLYN295421 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00503] In method org.apache.kafka.common.record.DefaultRecordBatch.RecordIterator.RecordIterator@POLYN295421 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00504] In method org.apache.kafka.common.record.DefaultRecordBatch.RecordIterator.RecordIterator@POLYN295421 the MagicNumber/String  'Found invalid record count ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00504] In method org.apache.kafka.common.record.DefaultRecordBatch.RecordIterator.RecordIterator@POLYN295421 the MagicNumber/String  ' in magic v' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00505"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#505"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00505] In method org.apache.kafka.common.record.DefaultRecordBatch.RecordIterator.RecordIterator@POLYN295421 the MagicNumber/String  ' batch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#515"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00515] For method next list of called methods Object monObjet|int readNextN296584"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.common.record.DefaultRecordBatch.RecordIterator.next@POLYN296364 the MagicNumber/String  'Incorrect declared batch size, records still remaining in file' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#531"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00531] For method readNext arguments long  baseOffset|long  baseTimestamp|int  baseSequence|Long  logAppendTime"
}} 
,
{ "ligne" : {
   "c1" : "00550"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#550"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00550] For method doReadRecord arguments long  baseOffset|long  baseTimestamp|int  baseSequence|Long  logAppendTime"
}} 
,
{ "ligne" : {
   "c1" : "00553"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#553"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00553] For method readNext arguments long  baseOffset|long  baseTimestamp|int  baseSequence|Long  logAppendTime"
}} 
,
{ "ligne" : {
   "c1" : "00557"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#557"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00557] In method org.apache.kafka.common.record.DefaultRecordBatch.StreamRecordIterator.readNext@POLYN297676 the MagicNumber/String  'Incorrect declared batch size, premature EOF reached' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00559"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#559"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00559] In method org.apache.kafka.common.record.DefaultRecordBatch.StreamRecordIterator.readNext@POLYN297676 the MagicNumber/String  'Failed to decompress record stream' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00566"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#566"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00566] In method org.apache.kafka.common.record.DefaultRecordBatch.StreamRecordIterator.ensureNoneRemaining@POLYN298249 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00568"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#568"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00568] In method org.apache.kafka.common.record.DefaultRecordBatch.StreamRecordIterator.ensureNoneRemaining@POLYN298249 the MagicNumber/String  'Error checking for remaining bytes after reading batch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.common.record.DefaultRecordBatch.StreamRecordIterator.close@POLYN298557 the MagicNumber/String  'Failed to close record stream' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00593"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#593"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00593] For method toMemoryRecordBatch arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.attributes@POLYN285286"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.compressedIterator@POLYN279571"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.countOrNull@POLYN277739"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.hasDeleteHorizonMs@POLYN278373"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.isControlBatch@POLYN278831"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.isTransactional@POLYN278207"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.iterator@POLYN281767"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.lastSequence@POLYN276943"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.recordInputStream@POLYN279136"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.setMaxTimestamp@POLYN283677"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.setPartitionLeaderEpoch@POLYN284562"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.skipKeyValueIterator@POLYN282573"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.streamingIterator@POLYN283212"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.uncompressedIterator@POLYN280807"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.writeEmptyHeader@POLYN287059"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN287963"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00177] In the recursive method org.apache.kafka.common.record.DefaultRecordBatch.hasDeleteHorizonMs@POLYN278373 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00190] In the recursive method org.apache.kafka.common.record.DefaultRecordBatch.isControlBatch@POLYN278831 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#173"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00173] In the recursive method org.apache.kafka.common.record.DefaultRecordBatch.isTransactional@POLYN278207 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#250"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00250] In the recursive method org.apache.kafka.common.record.DefaultRecordBatch.iterator@POLYN281767 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00259] In the recursive method org.apache.kafka.common.record.DefaultRecordBatch.iterator@POLYN281767 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#269"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00269] In the recursive method org.apache.kafka.common.record.DefaultRecordBatch.skipKeyValueIterator@POLYN282573 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00279] In the recursive method org.apache.kafka.common.record.DefaultRecordBatch.skipKeyValueIterator@POLYN282573 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#285"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00285] In the recursive method org.apache.kafka.common.record.DefaultRecordBatch.streamingIterator@POLYN283212 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00236] In the recursive method org.apache.kafka.common.record.DefaultRecordBatch.uncompressedIterator@POLYN280807 the MagicNumber/String 'Incorrect declared batch size, premature EOF reached' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00381] In the recursive method org.apache.kafka.common.record.DefaultRecordBatch.writeEmptyHeader@POLYN287059 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#381"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00381] In the recursive method org.apache.kafka.common.record.DefaultRecordBatch.writeEmptyHeader@POLYN287059 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00402] In the recursive method org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN287963 the MagicNumber/String 'Invalid magic value ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00403"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#403"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00403] In the recursive method org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN287963 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00404] In the recursive method org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN287963 the MagicNumber/String 'Invalid message timestamp ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
