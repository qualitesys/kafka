console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java 74 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.xml" 
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
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
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
 , "c4" : "29"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "17"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00032] The class MetadataDelta contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#53"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00053] The argument image is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.image.MetadataDelta.getOrCreateFeaturesDelta@POLYN200194 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.image.MetadataDelta.getOrCreateClusterDelta@POLYN200536 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.image.MetadataDelta.getOrCreateTopicsDelta@POLYN200878 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.image.MetadataDelta.getOrCreateConfigsDelta@POLYN201220 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.image.MetadataDelta.getOrCreateClientQuotasDelta@POLYN201562 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.image.MetadataDelta.getOrCreateProducerIdsDelta@POLYN201904 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.image.MetadataDelta.getOrCreateAclsDelta@POLYN202264 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.image.MetadataDelta.metadataVersionChanged@POLYN202541 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method read arguments long  highestOffset|int  highestEpoch|Iterator&lt;List&lt;ApiMessageAndVersion &gt; &gt;  reader"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#136"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00136] The argument reader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00138] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00139] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#145"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00145] For method replay arguments long  offset|int  epoch|ApiMessage  record"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#145"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00145] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.image.MetadataDelta.replay@POLYN203314 the MagicNumber/String  'Unknown metadata record type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#204"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00204] For method replay arguments RegisterBrokerRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.image.MetadataDelta.replay@POLYN205901 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#209"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00209] For method replay arguments UnregisterBrokerRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.image.MetadataDelta.replay@POLYN206205 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#214"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00214] For method replay arguments TopicRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00218] For method replay arguments PartitionRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#222"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00222] For method replay arguments ConfigRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#226"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00226] For method replay arguments PartitionChangeRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#230"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00230] For method replay arguments FenceBrokerRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#234"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00234] For method replay arguments UnfenceBrokerRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#238"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00238] For method replay arguments RemoveTopicRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#244"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00244] For method replay arguments FeatureLevelRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#257"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00257] For method replay arguments BrokerRegistrationChangeRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#261"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00261] For method replay arguments ClientQuotaRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#265"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00265] For method replay arguments ProducerIdsRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#269"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00269] For method replay arguments AccessControlEntryRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#273"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00273] For method replay arguments RemoveAccessControlEntryRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.image.MetadataDelta.apply@POLYN209800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.image.MetadataDelta.apply@POLYN209800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.image.MetadataDelta.apply@POLYN209800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.image.MetadataDelta.apply@POLYN209800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.image.MetadataDelta.apply@POLYN209800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.image.MetadataDelta.apply@POLYN209800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.image.MetadataDelta.apply@POLYN209800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.image.MetadataDelta.toString@POLYN212056 the MagicNumber/String  'MetadataDelta(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.image.MetadataDelta.toString@POLYN212056 the MagicNumber/String  'highestOffset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.image.MetadataDelta.toString@POLYN212056 the MagicNumber/String  ', highestEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.image.MetadataDelta.toString@POLYN212056 the MagicNumber/String  ', featuresDelta=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.image.MetadataDelta.toString@POLYN212056 the MagicNumber/String  ', clusterDelta=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00350] In method org.apache.kafka.image.MetadataDelta.toString@POLYN212056 the MagicNumber/String  ', topicsDelta=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00351"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method org.apache.kafka.image.MetadataDelta.toString@POLYN212056 the MagicNumber/String  ', configsDelta=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00352"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.image.MetadataDelta.toString@POLYN212056 the MagicNumber/String  ', clientQuotasDelta=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00353"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.image.MetadataDelta.toString@POLYN212056 the MagicNumber/String  ', producerIdsDelta=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method org.apache.kafka.image.MetadataDelta.toString@POLYN212056 the MagicNumber/String  ', aclsDelta=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00355"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.image.MetadataDelta.toString@POLYN212056 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#63"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00063] Public method featuresDelta is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00072] Public method clusterDelta is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00081] Public method topicsDelta is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00090] Public method configsDelta is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00099] Public method clientQuotasDelta is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00108] Public method producerIdsDelta is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00119] Public method aclsDelta is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00128] Public method metadataVersionChanged is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00214] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#218"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00218] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00222] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#226"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00226] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#230"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00230] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#234"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00234] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00238] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#244"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00244] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00257] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#261"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00261] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#265"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00265] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#269"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00269] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00273] Public method replay is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00278"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/MetadataDelta.java.html#278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00278] Public method finishSnapshot is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
