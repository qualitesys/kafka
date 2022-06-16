console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/FileRecords.java 94 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.xml" 
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
 , "c4" : "5"
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "61"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "23"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.common.record.FileRecords.FileRecords@POLYN241491 the MagicNumber/String  'The size of segment ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.common.record.FileRecords.FileRecords@POLYN241491 the MagicNumber/String  ' (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.record.FileRecords.FileRecords@POLYN241491 the MagicNumber/String  ') is larger than the maximum allowed segment size of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method readInto arguments ByteBuffer  buffer|int  position"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#84"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00084] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method slice arguments int  position|int  size"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.common.record.FileRecords.slice@POLYN244347 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method sliceUnaligned arguments int  position|int  size"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method availableBytes arguments int  position|int  size"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.common.record.FileRecords.availableBytes@POLYN245560 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.record.FileRecords.availableBytes@POLYN245560 the MagicNumber/String  'Invalid position: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.record.FileRecords.availableBytes@POLYN245560 the MagicNumber/String  ' in read from ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.record.FileRecords.availableBytes@POLYN245560 the MagicNumber/String  'Slice from position ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.record.FileRecords.availableBytes@POLYN245560 the MagicNumber/String  ' exceeds end position of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.common.record.FileRecords.availableBytes@POLYN245560 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.common.record.FileRecords.availableBytes@POLYN245560 the MagicNumber/String  'Invalid size: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.common.record.FileRecords.availableBytes@POLYN245560 the MagicNumber/String  ' in read from ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.common.record.FileRecords.availableBytes@POLYN245560 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method append arguments MemoryRecords  records"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#121"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00121] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.common.record.FileRecords.append@POLYN246936 the MagicNumber/String  'Append of size ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.common.record.FileRecords.append@POLYN246936 the MagicNumber/String  ' bytes is too large for segment with current file position at ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.common.record.FileRecords.flush@POLYN247564 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.common.record.FileRecords.deleteIfExists@POLYN248314 the MagicNumber/String  'FileChannel' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00160] For method updateParentDir arguments File  parentDir"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method renameTo arguments File  f"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.common.record.FileRecords.renameTo@POLYN249115 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00174] For method truncateTo arguments int  targetSize"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.common.record.FileRecords.truncateTo@POLYN249865 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.record.FileRecords.truncateTo@POLYN249865 the MagicNumber/String  'Attempt to truncate log segment ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.record.FileRecords.truncateTo@POLYN249865 the MagicNumber/String  ' to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.record.FileRecords.truncateTo@POLYN249865 the MagicNumber/String  ' bytes failed, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.common.record.FileRecords.truncateTo@POLYN249865 the MagicNumber/String  ' size of this log segment is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.common.record.FileRecords.truncateTo@POLYN249865 the MagicNumber/String  ' bytes.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00187] For method downConvert arguments byte  toMagic|long  firstOffset|Time  time"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.common.record.FileRecords.downConvert@POLYN250707 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#204"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00204] For method writeTo arguments TransferableChannel  destChannel|long  offset|int  length"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#204"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00204] The argument destChannel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.common.record.FileRecords.writeTo@POLYN251304 the MagicNumber/String  'Size of FileRecords %s has been truncated during write: old size %d, new size %d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00218] For method searchForOffsetWithSize arguments long  targetOffset|int  startingPosition"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.common.record.FileRecords.searchForOffsetWithSize@POLYN252523 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#228"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00228] For method searchForTimestamp arguments long  targetTimestamp|int  startingPosition|long  startingOffset"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00232] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.common.record.FileRecords.searchForTimestamp@POLYN253420 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#244"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00244] For method largestTimestampAfter arguments int  startingPosition"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.record.FileRecords.largestTimestampAfter@POLYN254383 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#261"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00261] For method maybeLeaderEpoch arguments int  leaderEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.common.record.FileRecords.toString@POLYN255858 the MagicNumber/String  'FileRecords(size=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.common.record.FileRecords.toString@POLYN255858 the MagicNumber/String  ', file=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.common.record.FileRecords.toString@POLYN255858 the MagicNumber/String  ', start=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.common.record.FileRecords.toString@POLYN255858 the MagicNumber/String  ', end=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method org.apache.kafka.common.record.FileRecords.toString@POLYN255858 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#282"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00282] For method batchesFrom arguments int  start"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#291"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00291] For method batchIterator arguments int  start"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#301"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00301] For method open arguments File  file|boolean  mutable|boolean  fileAlreadyExists|int  initFileSize|boolean  preallocate"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.common.record.FileRecords.open@POLYN257336 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.common.record.FileRecords.open@POLYN257336 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.common.record.FileRecords.open@POLYN257336 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#311"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00311] For method open arguments File  file|boolean  fileAlreadyExists|int  initFileSize|boolean  preallocate"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.common.record.FileRecords.open@POLYN258027 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#318"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00318] For method open arguments File  file|boolean  mutable"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.common.record.FileRecords.open@POLYN258348 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.common.record.FileRecords.open@POLYN258348 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.common.record.FileRecords.open@POLYN258348 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#322"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00322] For method open arguments File  file"
}} 
,
{ "ligne" : {
   "c1" : "00323"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method org.apache.kafka.common.record.FileRecords.open@POLYN258623 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#327"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00327] For method openChannel arguments File  file|boolean  mutable|boolean  fileAlreadyExists|int  initFileSize|boolean  preallocate"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#327"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00327] The argument file is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method org.apache.kafka.common.record.FileRecords.openChannel@POLYN259138 the MagicNumber/String  'rw' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00346] The class LogOffsetPosition contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#358"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00358] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00361"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00361] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method org.apache.kafka.common.record.FileRecords.LogOffsetPosition.equals@POLYN260501 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00361"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method org.apache.kafka.common.record.FileRecords.LogOffsetPosition.equals@POLYN260501 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.common.record.FileRecords.LogOffsetPosition.equals@POLYN260501 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00375"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.common.record.FileRecords.LogOffsetPosition.hashCode@POLYN261089 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.common.record.FileRecords.LogOffsetPosition.hashCode@POLYN261089 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.common.record.FileRecords.LogOffsetPosition.toString@POLYN261483 the MagicNumber/String  'LogOffsetPosition(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.common.record.FileRecords.LogOffsetPosition.toString@POLYN261483 the MagicNumber/String  'offset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.common.record.FileRecords.LogOffsetPosition.toString@POLYN261483 the MagicNumber/String  ', position=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00385] In method org.apache.kafka.common.record.FileRecords.LogOffsetPosition.toString@POLYN261483 the MagicNumber/String  ', size=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00386] In method org.apache.kafka.common.record.FileRecords.LogOffsetPosition.toString@POLYN261483 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00390"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00390] The class TimestampAndOffset contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#402"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00402] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00404] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00403"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method org.apache.kafka.common.record.FileRecords.TimestampAndOffset.equals@POLYN262266 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.common.record.FileRecords.TimestampAndOffset.equals@POLYN262266 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.common.record.FileRecords.TimestampAndOffset.equals@POLYN262266 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.common.record.FileRecords.TimestampAndOffset.toString@POLYN263076 the MagicNumber/String  'TimestampAndOffset(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00419"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00419] In method org.apache.kafka.common.record.FileRecords.TimestampAndOffset.toString@POLYN263076 the MagicNumber/String  'timestamp=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00420] In method org.apache.kafka.common.record.FileRecords.TimestampAndOffset.toString@POLYN263076 the MagicNumber/String  ', offset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00421"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.common.record.FileRecords.TimestampAndOffset.toString@POLYN263076 the MagicNumber/String  ', leaderEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00422"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileRecords.java.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00422] In method org.apache.kafka.common.record.FileRecords.TimestampAndOffset.toString@POLYN263076 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
