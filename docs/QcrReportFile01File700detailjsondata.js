console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java 52 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.common.requests.MetadataRequest"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.MetadataRequest" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00131"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#131"
 , "c1" : "MetadataRequest"
 , "c2" : "MetadataRequest(MetadataRequestData;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00137"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#137"
 , "c1" : "MetadataRequestData"
 , "c2" : "data()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00142"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#142"
 , "c1" : "AbstractResponse"
 , "c2" : "getErrorResponse(int;Throwable)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00162"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#162"
 , "c1" : "boolean"
 , "c2" : "isAllTopics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00168"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#168"
 , "c1" : "List&lt;String&gt;"
 , "c2" : "topics()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00178"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#178"
 , "c1" : "List&lt;Uuid&gt;"
 , "c2" : "topicIds()"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00190"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#190"
 , "c1" : "boolean"
 , "c2" : "allowAutoTopicCreation()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00194"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#194"
 , "c1" : "MetadataRequest"
 , "c2" : "parse(ByteBuffer;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00198"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#198"
 , "c1" : "List&lt;MetadataRequestTopic&gt;"
 , "c2" : "convertToMetadataRequestTopic(Collection&lt;String&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00204"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#204"
 , "c1" : "List&lt;MetadataRequestTopic&gt;"
 , "c2" : "convertTopicIdsToMetadataRequestTopic(Collection&lt;Uuid&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "28"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.common.requests.MetadataRequest.Builder.Builder@POLYN180181 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.requests.MetadataRequest.Builder.Builder@POLYN180181 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.common.requests.MetadataRequest.Builder.Builder@POLYN181310 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.common.requests.MetadataRequest.Builder.Builder@POLYN181310 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.requests.MetadataRequest.Builder.Builder@POLYN181310 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.common.requests.MetadataRequest.Builder.isAllTopics@POLYN182403 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method build arguments short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.common.requests.MetadataRequest.Builder.build@POLYN182806 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.common.requests.MetadataRequest.Builder.build@POLYN182806 the MagicNumber/String  'MetadataRequest versions older than 1 are not supported.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.requests.MetadataRequest.Builder.build@POLYN182806 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.common.requests.MetadataRequest.Builder.build@POLYN182806 the MagicNumber/String  'MetadataRequest versions older than 4 don't support the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.common.requests.MetadataRequest.Builder.build@POLYN182806 the MagicNumber/String  'allowAutoTopicCreation field' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.common.requests.MetadataRequest.Builder.build@POLYN182806 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.requests.MetadataRequest.Builder.build@POLYN182806 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.requests.MetadataRequest.Builder.build@POLYN182806 the MagicNumber/String  12 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.common.requests.MetadataRequest.Builder.build@POLYN182806 the MagicNumber/String  'MetadataRequest version ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.common.requests.MetadataRequest.Builder.build@POLYN182806 the MagicNumber/String  ' does not support null topic names.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.common.requests.MetadataRequest.Builder.build@POLYN182806 the MagicNumber/String  12 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.common.requests.MetadataRequest.Builder.build@POLYN182806 the MagicNumber/String  'MetadataRequest version ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.common.requests.MetadataRequest.Builder.build@POLYN182806 the MagicNumber/String  ' does not support non-zero topic IDs.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method getErrorResponse arguments int  throttleTimeMs|Throwable  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00148] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.common.requests.MetadataRequest.getErrorResponse@POLYN184555 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.common.requests.MetadataRequest.getErrorResponse@POLYN184555 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.common.requests.MetadataRequest.getErrorResponse@POLYN184555 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.common.requests.MetadataRequest.getErrorResponse@POLYN184555 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.common.requests.MetadataRequest.getErrorResponse@POLYN184555 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00163] The same method call data.topics()version() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.common.requests.MetadataRequest.isAllTopics@POLYN185767 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.common.requests.MetadataRequest.isAllTopics@POLYN185767 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.common.requests.MetadataRequest.topics@POLYN186082 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.common.requests.MetadataRequest.topicIds@POLYN186423 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#194"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00194] For method parse arguments ByteBuffer  buffer|short  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#198"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00198] For method convertToMetadataRequestTopic arguments Collection&lt;String &gt;  topics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#198"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00198] The argument topics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#204"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00204] For method convertTopicIdsToMetadataRequestTopic arguments Collection&lt;Uuid &gt;  topicIds"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#204"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00204] The argument topicIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.MetadataRequest.Builder.Builder@POLYN180181"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.MetadataRequest.Builder.Builder@POLYN181310"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.MetadataRequest.Builder.emptyTopicList@POLYN182277"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.MetadataRequest.Builder.toString@POLYN184047"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.MetadataRequest.Builder.topics@POLYN182554"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.MetadataRequest.allowAutoTopicCreation@POLYN186881"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.MetadataRequest.topicIds@POLYN186423"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.requests.MetadataRequest.topics@POLYN186082"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#54"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00054] In the recursive method org.apache.kafka.common.requests.MetadataRequest.Builder.Builder@POLYN180181 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.common.requests.MetadataRequest.Builder.Builder@POLYN180181 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00071] In the recursive method org.apache.kafka.common.requests.MetadataRequest.Builder.Builder@POLYN181310 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00072] In the recursive method org.apache.kafka.common.requests.MetadataRequest.Builder.Builder@POLYN181310 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#78"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00078] In the recursive method org.apache.kafka.common.requests.MetadataRequest.Builder.Builder@POLYN181310 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00181] In the recursive method org.apache.kafka.common.requests.MetadataRequest.topicIds@POLYN186423 the MagicNumber/String 10 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.html#169"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00169] In the recursive method org.apache.kafka.common.requests.MetadataRequest.topics@POLYN186082 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/MetadataRequest.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
