console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java 318 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.xml" 
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
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "28"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "134"
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
 , "c4" : "71"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "64"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00040] The class SubscriptionState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#74"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00074] Lock statement on synchronized method toString"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN322293 the MagicNumber/String  'SubscriptionState{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN322293 the MagicNumber/String  'type=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN322293 the MagicNumber/String  ', subscribedPattern=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN322293 the MagicNumber/String  ', subscription=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN322293 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN322293 the MagicNumber/String  ', groupSubscription=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN322293 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN322293 the MagicNumber/String  ', defaultResetStrategy=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN322293 the MagicNumber/String  ', assignment=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN322293 the MagicNumber/String  ' (id=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN322293 the MagicNumber/String  ')}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#84"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00084] Lock statement on synchronized method prettyString"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN322878 the MagicNumber/String  'None' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN322878 the MagicNumber/String  'Subscribe(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN322878 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN322878 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN322878 the MagicNumber/String  'Subscribe(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN322878 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN322878 the MagicNumber/String  'Assign(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN322878 the MagicNumber/String  ' , id=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN322878 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN322878 the MagicNumber/String  'Unrecognized subscription type: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#99"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00099] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.SubscriptionState@POLYN323614 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#110"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00110] Lock statement on synchronized method assignmentId"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method setSubscriptionType arguments SubscriptionType  type"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#122"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00122] Lock statement on synchronized method subscribe"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method subscribe arguments Set&lt;String &gt;  topics|ConsumerRebalanceListener  listener"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#128"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00128] Lock statement on synchronized method subscribe"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method subscribe arguments Pattern  pattern|ConsumerRebalanceListener  listener"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#134"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00134] Lock statement on synchronized method subscribeFromPattern"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00134] For method subscribeFromPattern arguments Set&lt;String &gt;  topics"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribeFromPattern@POLYN325687 the MagicNumber/String  'Attempt to subscribe from pattern while subscription type set to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method changeSubscription arguments Set&lt;String &gt;  topicsToSubscribe"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.changeSubscription@POLYN326006 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.changeSubscription@POLYN326006 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#151"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00151] Lock statement on synchronized method groupSubscribe"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method groupSubscribe arguments Collection&lt;String &gt;  topics"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#159"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00159] Lock statement on synchronized method resetGroupSubscription"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#164"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00164] Lock statement on synchronized method assignFromUser"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method assignFromUser arguments Set&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00176] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromUser@POLYN327235 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromUser@POLYN327235 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#189"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00189] Lock statement on synchronized method checkAssignmentMatchedSubscription"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#189"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00189] For method checkAssignmentMatchedSubscription arguments Collection&lt;TopicPartition &gt;  assignments"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.checkAssignmentMatchedSubscription@POLYN328489 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.checkAssignmentMatchedSubscription@POLYN328489 the MagicNumber/String  'Assigned partition {} for non-subscribed topic regex pattern; subscription pattern is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.checkAssignmentMatchedSubscription@POLYN328489 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.checkAssignmentMatchedSubscription@POLYN328489 the MagicNumber/String  'Assigned partition {} for non-subscribed topic; subscription is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.checkAssignmentMatchedSubscription@POLYN328489 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.checkAssignmentMatchedSubscription@POLYN328489 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#212"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00212] Lock statement on synchronized method assignFromSubscribed"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#212"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00212] For method assignFromSubscribed arguments Collection&lt;TopicPartition &gt;  assignments"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#212"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00212] The argument assignments is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00218] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN329531 the MagicNumber/String  'Attempt to dynamically assign partitions while manual assignment in use' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN329531 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#228"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00228] For method registerRebalanceListener arguments ConsumerRebalanceListener  listener"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN330432 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN330432 the MagicNumber/String  'RebalanceListener cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#235"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00235] Lock statement on synchronized method hasPatternSubscription"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#239"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00239] Lock statement on synchronized method hasNoSubscriptionOrUserAssignment"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#243"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00243] Lock statement on synchronized method unsubscribe"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.unsubscribe@POLYN331002 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#253"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00253] Lock statement on synchronized method matchesSubscribedPattern"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#253"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00253] For method matchesSubscribedPattern arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.matchesSubscribedPattern@POLYN331582 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.matchesSubscribedPattern@POLYN331582 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#260"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00260] Lock statement on synchronized method subscription"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#266"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00266] Lock statement on synchronized method pausedPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#271"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00271] Lock statement on synchronized method metadataTopics"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#285"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00285] Lock statement on synchronized method needsMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#285"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00285] For method needsMetadata arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#289"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00289] For method assignedState arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333476 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333476 the MagicNumber/String  'No current assignment for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#296"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00296] For method assignedStateOrNull arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#300"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00300] Lock statement on synchronized method seekValidated"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#300"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00300] For method seekValidated arguments TopicPartition  tp|FetchPosition  position"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#304"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00304] For method seek arguments TopicPartition  tp|long  offset"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#308"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00308] For method seekUnvalidated arguments TopicPartition  tp|FetchPosition  position"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#312"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00312] Lock statement on synchronized method maybeSeekUnvalidated"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#312"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00312] For method maybeSeekUnvalidated arguments TopicPartition  tp|FetchPosition  position|OffsetResetStrategy  requestedResetStrategy"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334586 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334586 the MagicNumber/String  'Skipping reset of partition {} since it is no longer assigned' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334586 the MagicNumber/String  'Skipping reset of partition {} since reset is no longer needed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334586 the MagicNumber/String  'Skipping reset of partition {} since an alternative reset has been requested' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334586 the MagicNumber/String  'Resetting offset for partition {} to position {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#327"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00327] Lock statement on synchronized method assignedPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#332"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00332] Lock statement on synchronized method assignedPartitionsList"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#337"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00337] Lock statement on synchronized method numAssignedPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#342"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00342] Lock statement on synchronized method fetchablePartitions"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#342"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00342] For method fetchablePartitions arguments Predicate&lt;TopicPartition &gt;  isAvailable"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#342"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00342] The argument isAvailable is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#354"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00354] Lock statement on synchronized method hasAutoAssignedPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#358"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00358] Lock statement on synchronized method position"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#358"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00358] For method position arguments TopicPartition  tp|FetchPosition  position"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#363"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00363] Lock statement on synchronized method maybeValidatePositionForCurrentLeader"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#363"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00363] For method maybeValidatePositionForCurrentLeader arguments ApiVersions  apiVersions|TopicPartition  tp|Metadata.LeaderAndEpoch  leaderAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#363"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00363] The argument apiVersions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#365"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00365] The argument leaderAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeValidatePositionForCurrentLeader@POLYN337429 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeValidatePositionForCurrentLeader@POLYN337429 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#381"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00381] Lock statement on synchronized method maybeCompleteValidation"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#381"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00381] For method maybeCompleteValidation arguments TopicPartition  tp|FetchPosition  requestPosition|EpochEndOffset  epochEndOffset"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#383"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00383] The argument epochEndOffset is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00385] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN338430 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00386] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN338430 the MagicNumber/String  'Skipping completed validation for partition {} which is not currently assigned.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN338430 the MagicNumber/String  'Skipping completed validation for partition {} which is no longer expecting validation.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN338430 the MagicNumber/String  'Skipping completed validation for partition {} since the current position {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN338430 the MagicNumber/String  'no longer matches the position {} when the request was sent' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN338430 the MagicNumber/String  'Truncation detected for partition {} at offset {}, resetting offset' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN338430 the MagicNumber/String  'Truncation detected for partition {} at offset {}, but no reset policy is set' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00411"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00411] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN338430 the MagicNumber/String  'Truncation detected for partition {} at offset {}, resetting offset to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00412] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN338430 the MagicNumber/String  'the first offset known to diverge {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN338430 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN338430 the MagicNumber/String  'Truncation detected for partition {} at offset {} (the end offset from the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN338430 the MagicNumber/String  'broker is {}), but no reset policy is set' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#429"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00429] Lock statement on synchronized method awaitingValidation"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#429"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00429] For method awaitingValidation arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#433"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00433] Lock statement on synchronized method completeValidation"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#433"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00433] For method completeValidation arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#437"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00437] Lock statement on synchronized method validPosition"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#437"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00437] For method validPosition arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#441"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00441] Lock statement on synchronized method position"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#441"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00441] For method position arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#445"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00445] Lock statement on synchronized method partitionLag"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#445"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00445] For method partitionLag arguments TopicPartition  tp|IsolationLevel  isolationLevel"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLag@POLYN342041 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLag@POLYN342041 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLag@POLYN342041 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLag@POLYN342041 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLag@POLYN342041 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLag@POLYN342041 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#456"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00456] Lock statement on synchronized method partitionEndOffset"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#456"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00456] For method partitionEndOffset arguments TopicPartition  tp|IsolationLevel  isolationLevel"
}} 
,
{ "ligne" : {
   "c1" : "00465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#465"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00465] Lock statement on synchronized method requestPartitionEndOffset"
}} 
,
{ "ligne" : {
   "c1" : "00465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#465"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00465] For method requestPartitionEndOffset arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#470"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00470] Lock statement on synchronized method partitionEndOffsetRequested"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#470"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00470] For method partitionEndOffsetRequested arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#475"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00475] Lock statement on synchronized method partitionLead"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#475"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00475] For method partitionLead arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00477] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLead@POLYN343557 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00477] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLead@POLYN343557 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#480"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00480] Lock statement on synchronized method updateHighWatermark"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#480"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00480] For method updateHighWatermark arguments TopicPartition  tp|long  highWatermark"
}} 
,
{ "ligne" : {
   "c1" : "00484"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#484"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00484] Lock statement on synchronized method updateLogStartOffset"
}} 
,
{ "ligne" : {
   "c1" : "00484"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#484"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00484] For method updateLogStartOffset arguments TopicPartition  tp|long  logStartOffset"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#488"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00488] Lock statement on synchronized method updateLastStableOffset"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#488"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00488] For method updateLastStableOffset arguments TopicPartition  tp|long  lastStableOffset"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#493"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00493] Lock statement on synchronized method updatePreferredReadReplica"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#493"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00493] For method updatePreferredReadReplica arguments TopicPartition  tp|int  preferredReadReplicaId|LongSupplier  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#498"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00498] Lock statement on synchronized method preferredReadReplica"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#498"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00498] For method preferredReadReplica arguments TopicPartition  tp|long  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00500"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00500] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.preferredReadReplica@POLYN345116 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#508"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00508] Lock statement on synchronized method clearPreferredReadReplica"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#508"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00508] For method clearPreferredReadReplica arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00512"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#512"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00512] Lock statement on synchronized method allConsumed"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#517"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00517] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.allConsumed@POLYN345906 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00522"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#522"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00522] Lock statement on synchronized method requestOffsetReset"
}} 
,
{ "ligne" : {
   "c1" : "00522"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#522"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00522] For method requestOffsetReset arguments TopicPartition  partition|OffsetResetStrategy  offsetResetStrategy"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#526"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00526] Lock statement on synchronized method requestOffsetReset"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#526"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00526] For method requestOffsetReset arguments Collection&lt;TopicPartition &gt;  partitions|OffsetResetStrategy  offsetResetStrategy"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#526"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00526] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00528"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#528"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00528] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346662 the MagicNumber/String  'Seeking to {} offset of partition {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#533"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00533] For method requestOffsetReset arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#537"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00537] Lock statement on synchronized method setNextAllowedRetry"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#537"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00537] For method setNextAllowedRetry arguments Set&lt;TopicPartition &gt;  partitions|long  nextAllowResetTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#547"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00547] Lock statement on synchronized method isOffsetResetNeeded"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#547"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00547] For method isOffsetResetNeeded arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00551"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#551"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00551] Lock statement on synchronized method resetStrategy"
}} 
,
{ "ligne" : {
   "c1" : "00551"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#551"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00551] For method resetStrategy arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00555"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#555"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00555] Lock statement on synchronized method hasAllFetchPositions"
}} 
,
{ "ligne" : {
   "c1" : "00560"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#560"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00560] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.hasAllFetchPositions@POLYN347956 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00563] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.hasAllFetchPositions@POLYN347956 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00566"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#566"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00566] Lock statement on synchronized method initializingPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#570"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00570] For method collectPartitions arguments Predicate&lt;TopicPartitionState &gt;  filter"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#570"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00570] The argument filter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00581"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#581"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00581] Lock statement on synchronized method resetInitializingPositions"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#596"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00596] Lock statement on synchronized method partitionsNeedingReset"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#596"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00596] For method partitionsNeedingReset arguments long  nowMs"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#600"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00600] Lock statement on synchronized method partitionsNeedingValidation"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#600"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00600] For method partitionsNeedingValidation arguments long  nowMs"
}} 
,
{ "ligne" : {
   "c1" : "00604"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#604"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00604] Lock statement on synchronized method isAssigned"
}} 
,
{ "ligne" : {
   "c1" : "00604"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#604"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00604] For method isAssigned arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00608"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#608"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00608] Lock statement on synchronized method isPaused"
}} 
,
{ "ligne" : {
   "c1" : "00608"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#608"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00608] For method isPaused arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00610"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#610"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00610] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.isPaused@POLYN350462 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00613"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#613"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00613] Lock statement on synchronized method isFetchable"
}} 
,
{ "ligne" : {
   "c1" : "00613"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#613"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00613] For method isFetchable arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00615"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#615"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00615] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.isFetchable@POLYN350722 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#618"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00618] Lock statement on synchronized method hasValidPosition"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#618"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00618] For method hasValidPosition arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00620"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#620"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00620] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.hasValidPosition@POLYN350987 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00623"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#623"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00623] Lock statement on synchronized method pause"
}} 
,
{ "ligne" : {
   "c1" : "00623"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#623"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00623] For method pause arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00627"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#627"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00627] Lock statement on synchronized method resume"
}} 
,
{ "ligne" : {
   "c1" : "00627"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#627"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00627] For method resume arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00631"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#631"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00631] Lock statement on synchronized method requestFailed"
}} 
,
{ "ligne" : {
   "c1" : "00631"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#631"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00631] For method requestFailed arguments Set&lt;TopicPartition &gt;  partitions|long  nextRetryTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00635"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#635"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00635] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00636"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#636"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00636] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN351541 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#641"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00641] Lock statement on synchronized method movePartitionToEnd"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#641"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00641] For method movePartitionToEnd arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00645"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#645"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00645] Lock statement on synchronized method rebalanceListener"
}} 
,
{ "ligne" : {
   "c1" : "00649"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#649"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00649] The class TopicPartitionState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00665"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#665"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00665] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN352641 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00666"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#666"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00666] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN352641 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00668"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00668] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN352641 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00669"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#669"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00669] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN352641 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#670"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00670] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN352641 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00671"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00671] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN352641 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00672"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#672"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00672] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN352641 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00673"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#673"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00673] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN352641 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00674"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#674"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00674] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN352641 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00682"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#682"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00682] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.requestEndOffset@POLYN353434 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00685"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#685"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00685] For method transitionState arguments FetchState  newState|Runnable  runIfTransitioned"
}} 
,
{ "ligne" : {
   "c1" : "00685"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#685"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00685] The argument runIfTransitioned is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00689"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#689"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00689] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00690"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#690"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00690] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.transitionState@POLYN353531 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00691"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#691"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00691] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.transitionState@POLYN353531 the MagicNumber/String  'Transitioned subscription state to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00691"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#691"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00691] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.transitionState@POLYN353531 the MagicNumber/String  ', but position is null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00693"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#693"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00693] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.transitionState@POLYN353531 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00698"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#698"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00698] For method preferredReadReplica arguments long  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00699"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#699"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00699] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.preferredReadReplica@POLYN354350 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00700"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#700"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00700] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.preferredReadReplica@POLYN354350 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00707"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#707"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00707] For method updatePreferredReadReplica arguments int  preferredReadReplica|LongSupplier  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00707"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#707"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00707] The argument timeMs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00708"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#708"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00708] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.updatePreferredReadReplica@POLYN354737 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00715"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#715"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00715] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.clearPreferredReadReplica@POLYN355142 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00717"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#717"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00717] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.clearPreferredReadReplica@POLYN355142 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00718"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#718"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00718] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.clearPreferredReadReplica@POLYN355142 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00725"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#725"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00725] For method reset arguments OffsetResetStrategy  strategy"
}} 
,
{ "ligne" : {
   "c1" : "00728"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#728"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00728] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.reset@POLYN355604 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00733"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#733"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00733] For method maybeValidatePosition arguments Metadata.LeaderAndEpoch  currentLeaderAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00733"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#733"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00733] The argument currentLeaderAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00735"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#735"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00735] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.maybeValidatePosition@POLYN356114 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00739"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#739"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00739] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.maybeValidatePosition@POLYN356114 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00742"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#742"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00742] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.maybeValidatePosition@POLYN356114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00745"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#745"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00745] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.maybeValidatePosition@POLYN356114 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00751"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#751"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00751] For method updatePositionLeaderNoValidation arguments Metadata.LeaderAndEpoch  currentLeaderAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00752"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#752"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00752] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.updatePositionLeaderNoValidation@POLYN357050 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00755"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#755"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00755] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.updatePositionLeaderNoValidation@POLYN357050 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00760"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#760"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00760] For method validatePosition arguments FetchPosition  position"
}} 
,
{ "ligne" : {
   "c1" : "00760"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#760"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00760] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00764"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#764"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00764] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.validatePosition@POLYN357528 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00770"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#770"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00770] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.validatePosition@POLYN357528 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00778"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#778"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00778] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.completeValidation@POLYN358261 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00786"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#786"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00786] For method awaitingRetryBackoff arguments long  nowMs"
}} 
,
{ "ligne" : {
   "c1" : "00787"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#787"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00787] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.awaitingRetryBackoff@POLYN358653 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00794"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#794"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00794] For method setNextAllowedRetry arguments long  nextAllowedRetryTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00798"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#798"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00798] For method requestFailed arguments long  nextAllowedRetryTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00807"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#807"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00807] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.hasPosition@POLYN359322 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00814"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#814"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00814] For method seekValidated arguments FetchPosition  position"
}} 
,
{ "ligne" : {
   "c1" : "00817"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#817"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00817] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.seekValidated@POLYN359510 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00818"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#818"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00818] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.seekValidated@POLYN359510 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00822"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#822"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00822] For method seekUnvalidated arguments FetchPosition  fetchPosition"
}} 
,
{ "ligne" : {
   "c1" : "00827"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#827"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00827] For method position arguments FetchPosition  position"
}} 
,
{ "ligne" : {
   "c1" : "00829"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#829"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00829] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.position@POLYN360061 the MagicNumber/String  'Cannot set a new position without a valid current position' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00837"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#837"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00837] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.validPosition@POLYN360324 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00842"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#842"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00842] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.pause@POLYN360520 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00846"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#846"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00846] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.resume@POLYN360627 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00853"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#853"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00853] For method highWatermark arguments Long  highWatermark"
}} 
,
{ "ligne" : {
   "c1" : "00855"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#855"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00855] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.highWatermark@POLYN360863 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00858"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#858"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00858] For method logStartOffset arguments Long  logStartOffset"
}} 
,
{ "ligne" : {
   "c1" : "00862"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#862"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00862] For method lastStableOffset arguments Long  lastStableOffset"
}} 
,
{ "ligne" : {
   "c1" : "00864"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#864"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00864] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.lastStableOffset@POLYN361183 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#964"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00964] The class FetchPosition contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00980"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#980"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00980] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00982] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00981"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#981"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00981] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.equals@POLYN365163 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00982] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.equals@POLYN365163 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00982] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.equals@POLYN365163 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#996"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00996] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.toString@POLYN365968 the MagicNumber/String  'FetchPosition{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00997"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#997"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00997] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.toString@POLYN365968 the MagicNumber/String  'offset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00998"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#998"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00998] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.toString@POLYN365968 the MagicNumber/String  ', offsetEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00999"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#999"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00999] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.toString@POLYN365968 the MagicNumber/String  ', currentLeader=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01000"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1000"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01000] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.toString@POLYN365968 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01004"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1004"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01004] The class LogTruncation contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1020"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01020] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN366751 the MagicNumber/String  '(partition=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1022"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01022] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN366751 the MagicNumber/String  ', fetchOffset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1024"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01024] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN366751 the MagicNumber/String  ', fetchEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1029"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01029] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN366751 the MagicNumber/String  ', divergentOffset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1031"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01031] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN366751 the MagicNumber/String  ', divergentEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1034"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01034] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN366751 the MagicNumber/String  ', divergentOffset=unknown' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1035"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01035] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN366751 the MagicNumber/String  ', divergentEpoch=unknown' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1038"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01038] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN366751 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00122] Public method subscribe is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00266] Public method pausedPartitions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#363"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00363] Public method maybeValidatePositionForCurrentLeader is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00429] Public method awaitingValidation is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#437"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00437] Public method validPosition is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#441"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00441] Public method position is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#445"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00445] Public method partitionLag is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00456] Public method partitionEndOffset is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#470"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00470] Public method partitionEndOffsetRequested is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#498"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00498] Public method preferredReadReplica is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#508"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00508] Public method clearPreferredReadReplica is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#547"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00547] Public method isOffsetResetNeeded is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00551"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#551"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00551] Public method resetStrategy is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00566"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#566"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00566] Public method initializingPartitions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#596"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00596] Public method partitionsNeedingReset is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#600"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00600] Public method partitionsNeedingValidation is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00608"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#608"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00608] Public method isPaused is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#618"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00618] Public method hasValidPosition is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#300"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00300] Public method seekValidated is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00304] Public method seek is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#308"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00308] Public method seekUnvalidated is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#358"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00358] Public method position is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00433] Public method completeValidation is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#465"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00465] Public method requestPartitionEndOffset is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#493"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00493] Public method updatePreferredReadReplica is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00522"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#522"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00522] Public method requestOffsetReset is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00623"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#623"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00623] Public method pause is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00627"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#627"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00627] Public method resume is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
