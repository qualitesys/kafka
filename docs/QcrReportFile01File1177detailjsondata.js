console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java 41 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.xml" 
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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "4"
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
 , "c4" : "25"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class OffsetStorageWriter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#40"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00040] Lock statement on synchronized method offset"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method offset arguments Map&lt;String ,? &gt;  partition|Map&lt;String ,? &gt;  offset"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.connect.storage.OffsetStorageWriter.flushing@POLYN191181 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#49"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00049] Lock statement on synchronized method beginFlush"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.connect.storage.OffsetStorageWriter.beginFlush@POLYN191457 the MagicNumber/String  'Invalid call to OffsetStorageWriter flush() while already flushing, the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.connect.storage.OffsetStorageWriter.beginFlush@POLYN191457 the MagicNumber/String  'framework should not allow this' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.connect.storage.OffsetStorageWriter.beginFlush@POLYN191457 the MagicNumber/String  'OffsetStorageWriter is already flushing' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.storage.OffsetStorageWriter.beginFlush@POLYN191457 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.connect.storage.OffsetStorageWriter.beginFlush@POLYN191457 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#65"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00065] Lock statement on synchronized method willFlush"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method doFlush arguments Callback&lt;Void &gt;  callback"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#76"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00076] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00088] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00090] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN192480 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN192480 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN192480 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN192480 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN192480 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN192480 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN192480 the MagicNumber/String  'CRITICAL: Failed to serialize offset data, making it impossible to commit ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN192480 the MagicNumber/String  'offsets under namespace {}. This likely won't recover unless the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN192480 the MagicNumber/String  'unserializable partition or offset information is overwritten.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN192480 the MagicNumber/String  'Cause of serialization failure:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN192480 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN192480 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN192480 the MagicNumber/String  'Submitting {} entries to backing store. The offsets are: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN192480 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#117"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00117] Lock statement on synchronized method cancelFlush"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.connect.storage.OffsetStorageWriter.cancelFlush@POLYN195334 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#130"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00130] Lock statement on synchronized method handleFinishWrite"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method handleFinishWrite arguments long  flushId|Throwable  error|Void  result"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.connect.storage.OffsetStorageWriter.handleFinishWrite@POLYN195792 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.connect.storage.OffsetStorageWriter.handleFinishWrite@POLYN195792 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.connect.storage.OffsetStorageWriter.handleFinishWrite@POLYN195792 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.connect.storage.OffsetStorageWriter.handleFinishWrite@POLYN195792 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#49"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00049] Public method beginFlush is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00065] Public method willFlush is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00040] Public method offset is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00117] Public method cancelFlush is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
