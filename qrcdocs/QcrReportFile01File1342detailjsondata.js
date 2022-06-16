console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java 40 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.xml" 
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
 , "c4" : "8"
}}
,
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
 , "c4" : "6"
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
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00023] The class TopicsDelta contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method replay arguments TopicRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method getOrCreateTopicDelta arguments Uuid  id"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.image.TopicsDelta.getOrCreateTopicDelta@POLYN187750 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method replay arguments PartitionRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method replay arguments PartitionChangeRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#64"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00064] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method replay arguments RemoveTopicRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.image.TopicsDelta.replay@POLYN188732 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.image.TopicsDelta.replay@POLYN188732 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.image.TopicsDelta.replay@POLYN188732 the MagicNumber/String  'Unable to delete topic with id ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.image.TopicsDelta.replay@POLYN188732 the MagicNumber/String  ': no such topic found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method handleMetadataVersionChange arguments MetadataVersion  newVersion"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00105] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00106] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00107] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00114] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00121] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.image.TopicsDelta.apply@POLYN190280 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00129] For method changedTopic arguments Uuid  topicId"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00134] For method topicWasDeleted arguments String  topicName"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.image.TopicsDelta.topicWasDeleted@POLYN192707 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.image.TopicsDelta.topicWasDeleted@POLYN192707 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method localChanges arguments int  brokerId"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00153] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.image.TopicsDelta.toString@POLYN195098 the MagicNumber/String  'TopicsDelta(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.image.TopicsDelta.toString@POLYN195098 the MagicNumber/String  'changedTopics=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.image.TopicsDelta.toString@POLYN195098 the MagicNumber/String  ', deletedTopicIds=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.image.TopicsDelta.toString@POLYN195098 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00040] Public method changedTopics is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00129] Public method changedTopic is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#142"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00142] Public method deletedTopicIds is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00174] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#44"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00044] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00059] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00064] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/TopicsDelta.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00097] Public method handleMetadataVersionChange is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
