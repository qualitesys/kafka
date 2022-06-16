console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java 96 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
 , "c4" : "6"
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
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.common.record.DefaultRecordBatch.ensureValid@POLYN268700 the MagicNumber/String  'Record batch is corrupt (the size ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.record.DefaultRecordBatch.ensureValid@POLYN268700 the MagicNumber/String  ' is smaller than the minimum allowed overhead ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.record.DefaultRecordBatch.ensureValid@POLYN268700 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.common.record.DefaultRecordBatch.ensureValid@POLYN268700 the MagicNumber/String  'Record is corrupt (stored crc = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.record.DefaultRecordBatch.ensureValid@POLYN268700 the MagicNumber/String  ', computed crc = ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.record.DefaultRecordBatch.ensureValid@POLYN268700 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.common.record.DefaultRecordBatch.timestampType@POLYN269620 the MagicNumber/String  0 should be converted to const"
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
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.common.record.DefaultRecordBatch.isTransactional@POLYN271951 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.record.DefaultRecordBatch.hasDeleteHorizonMs@POLYN272117 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.common.record.DefaultRecordBatch.isControlBatch@POLYN272575 the MagicNumber/String  0 should be converted to const"
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
   "c1" : "00236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.common.record.DefaultRecordBatch.uncompressedIterator@POLYN274551 the MagicNumber/String  'Incorrect declared batch size, premature EOF reached' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00250"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.common.record.DefaultRecordBatch.iterator@POLYN275511 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00259"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.common.record.DefaultRecordBatch.iterator@POLYN275511 the MagicNumber/String  false should be converted to const"
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
 , "c3" : "QC-JAV000010[00269] In method org.apache.kafka.common.record.DefaultRecordBatch.skipKeyValueIterator@POLYN276317 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.common.record.DefaultRecordBatch.skipKeyValueIterator@POLYN276317 the MagicNumber/String  true should be converted to const"
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
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.common.record.DefaultRecordBatch.streamingIterator@POLYN276956 the MagicNumber/String  false should be converted to const"
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
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.common.record.DefaultRecordBatch.equals@POLYN279188 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.common.record.DefaultRecordBatch.equals@POLYN279188 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.common.record.DefaultRecordBatch.equals@POLYN279188 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.common.record.DefaultRecordBatch.hashCode@POLYN279711 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.common.record.DefaultRecordBatch.hashCode@POLYN279711 the MagicNumber/String  0 should be converted to const"
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
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.common.record.DefaultRecordBatch.computeAttributes@POLYN279892 the MagicNumber/String  'Timestamp type must be provided to compute attributes for message ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00352"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.common.record.DefaultRecordBatch.computeAttributes@POLYN279892 the MagicNumber/String  'format v2 and above' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.common.record.DefaultRecordBatch.computeAttributes@POLYN279892 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.common.record.DefaultRecordBatch.computeAttributes@POLYN279892 the MagicNumber/String  0 should be converted to const"
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
 , "c3" : "QC-JAV000010[00381] In method org.apache.kafka.common.record.DefaultRecordBatch.writeEmptyHeader@POLYN280803 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method org.apache.kafka.common.record.DefaultRecordBatch.writeEmptyHeader@POLYN280803 the MagicNumber/String  0 should be converted to const"
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
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00384] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN281707 the MagicNumber/String  'Invalid magic value ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00403"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN281707 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN281707 the MagicNumber/String  'Invalid message timestamp ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN284586 the MagicNumber/String  'RecordBatch(magic=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN284586 the MagicNumber/String  ', offsets=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN284586 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN284586 the MagicNumber/String  '], ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN284586 the MagicNumber/String  'sequence=[' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN284586 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN284586 the MagicNumber/String  '], ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN284586 the MagicNumber/String  'isTransactional=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN284586 the MagicNumber/String  ', isControlBatch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00430"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN284586 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN284586 the MagicNumber/String  'compression=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN284586 the MagicNumber/String  ', timestampType=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN284586 the MagicNumber/String  ', crc=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method org.apache.kafka.common.record.DefaultRecordBatch.toString@POLYN284586 the MagicNumber/String  ')' should be converted to const"
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
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.common.record.DefaultRecordBatch.sizeInBytes@POLYN285331 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.common.record.DefaultRecordBatch.sizeInBytes@POLYN285331 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00444"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.apache.kafka.common.record.DefaultRecordBatch.sizeInBytes@POLYN285331 the MagicNumber/String  null should be converted to const"
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
 , "c3" : "QC-JAV000010[00456] In method org.apache.kafka.common.record.DefaultRecordBatch.sizeInBytes@POLYN286551 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00459"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00459] In method org.apache.kafka.common.record.DefaultRecordBatch.sizeInBytes@POLYN286551 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00460"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#460"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00460] In method org.apache.kafka.common.record.DefaultRecordBatch.sizeInBytes@POLYN286551 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00463"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00463] In method org.apache.kafka.common.record.DefaultRecordBatch.sizeInBytes@POLYN286551 the MagicNumber/String  null should be converted to const"
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
 , "c3" : "QC-JAV000010[00479] In method org.apache.kafka.common.record.DefaultRecordBatch.incrementSequence@POLYN288097 the MagicNumber/String  1 should be converted to const"
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
 , "c3" : "QC-JAV000010[00485] In method org.apache.kafka.common.record.DefaultRecordBatch.decrementSequence@POLYN288474 the MagicNumber/String  1 should be converted to const"
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
 , "c3" : "QC-JAV000010[00498] In method org.apache.kafka.common.record.DefaultRecordBatch.RecordIterator.RecordIterator@POLYN289165 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00503"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#503"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00503] In method org.apache.kafka.common.record.DefaultRecordBatch.RecordIterator.RecordIterator@POLYN289165 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00504] In method org.apache.kafka.common.record.DefaultRecordBatch.RecordIterator.RecordIterator@POLYN289165 the MagicNumber/String  'Found invalid record count ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00504"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00504] In method org.apache.kafka.common.record.DefaultRecordBatch.RecordIterator.RecordIterator@POLYN289165 the MagicNumber/String  ' in magic v' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00505"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#505"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00505] In method org.apache.kafka.common.record.DefaultRecordBatch.RecordIterator.RecordIterator@POLYN289165 the MagicNumber/String  ' batch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00526] In method org.apache.kafka.common.record.DefaultRecordBatch.RecordIterator.next@POLYN290108 the MagicNumber/String  'Incorrect declared batch size, records still remaining in file' should be converted to const"
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
 , "c3" : "QC-JAV000010[00557] In method org.apache.kafka.common.record.DefaultRecordBatch.StreamRecordIterator.readNext@POLYN291420 the MagicNumber/String  'Incorrect declared batch size, premature EOF reached' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00559"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#559"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00559] In method org.apache.kafka.common.record.DefaultRecordBatch.StreamRecordIterator.readNext@POLYN291420 the MagicNumber/String  'Failed to decompress record stream' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00566"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#566"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00566] In method org.apache.kafka.common.record.DefaultRecordBatch.StreamRecordIterator.ensureNoneRemaining@POLYN291993 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00568"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#568"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00568] In method org.apache.kafka.common.record.DefaultRecordBatch.StreamRecordIterator.ensureNoneRemaining@POLYN291993 the MagicNumber/String  'Error checking for remaining bytes after reading batch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00577"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.common.record.DefaultRecordBatch.StreamRecordIterator.close@POLYN292301 the MagicNumber/String  'Failed to close record stream' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00593"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/DefaultRecordBatch.java.html#593"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00593] For method toMemoryRecordBatch arguments ByteBuffer  buffer"
}} 
]
};
console.log('leListeStr 99 main end');
