console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java 45 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AdminApiLookupStrategy<AllBrokersStrategy.BrokerKey>"
 , "c2" : "org.apache.kafka.clients.admin.internals.AllBrokersStrategy"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.AllBrokersStrategy" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#56"
 , "c1" : "AllBrokersStrategy"
 , "c2" : "AllBrokersStrategy(LogContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#63"
 , "c1" : "ApiRequestScope"
 , "c2" : "lookupScope(BrokerKey)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#68"
 , "c1" : "MetadataRequest.Builder"
 , "c2" : "buildRequest(Set&lt;BrokerKey&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#75"
 , "c1" : "LookupResult&lt;BrokerKey&gt;"
 , "c2" : "handleResponse(Set&lt;BrokerKey&gt;;AbstractResponse)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00100"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#100"
 , "c1" : "void"
 , "c2" : "validateLookupKeys(Set&lt;BrokerKey&gt;)"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "19"
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
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method lookupScope arguments BrokerKey  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method buildRequest arguments Set&lt;BrokerKey &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method handleResponse arguments Set&lt;BrokerKey &gt;  keys|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00075] For method handleResponse list of called methods Object monObjet|MetadataResponseData response_dataN175419"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.handleResponse@POLYN175131 the MagicNumber/String  'Metadata response contained no brokers. Will backoff and retry' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.handleResponse@POLYN175131 the MagicNumber/String  'Discovered all brokers {} to send requests to' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method validateLookupKeys arguments Set&lt;BrokerKey &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#100"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00100] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.validateLookupKeys@POLYN176335 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.validateLookupKeys@POLYN176335 the MagicNumber/String  'Unexpected key set: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.validateLookupKeys@POLYN176335 the MagicNumber/String  'Unexpected key set: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00120] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.BrokerKey.equals@POLYN177102 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.BrokerKey.equals@POLYN177102 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.BrokerKey.equals@POLYN177102 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.BrokerKey.toString@POLYN177764 the MagicNumber/String  'BrokerKey(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.BrokerKey.toString@POLYN177764 the MagicNumber/String  'brokerId=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.BrokerKey.toString@POLYN177764 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00148] For method completeLookup arguments Map&lt;BrokerKey ,Integer &gt;  brokerMapping"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#148"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00148] The argument brokerMapping is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.completeLookup@POLYN178492 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.completeLookup@POLYN178492 the MagicNumber/String  'Invalid lookup mapping ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.completeLookup@POLYN178492 the MagicNumber/String  ' -&amp;gt; ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00159] For method completeLookupExceptionally arguments Map&lt;BrokerKey ,Throwable &gt;  lookupErrors"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#159"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00159] The argument lookupErrors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.completeLookupExceptionally@POLYN179176 the MagicNumber/String  'Unexpected keys among lookup errors: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method complete arguments Map&lt;BrokerKey ,V &gt;  values"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#167"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00167] The argument values is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00171] For method complete arguments AllBrokersStrategy.BrokerKey  key|V  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.complete@POLYN179794 the MagicNumber/String  'Invalid attempt to complete with lookup key sentinel' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#180"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00180] For method completeExceptionally arguments Map&lt;BrokerKey ,Throwable &gt;  errors"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#180"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00180] The argument errors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#184"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00184] For method completeExceptionally arguments AllBrokersStrategy.BrokerKey  key|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00196] For method futureOrThrow arguments BrokerKey  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00196] For method futureOrThrow list of called methods Object monObjet|V brokerFutures_getN181308"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#196"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00196] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.futureOrThrow@POLYN180907 the MagicNumber/String  'Attempt to complete with invalid key: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.futureOrThrow@POLYN180907 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.futureOrThrow@POLYN180907 the MagicNumber/String  'Attempt to complete with unknown broker id: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.completeExceptionally@POLYN180172"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.AllBrokersStrategy.handleResponse@POLYN175131"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.handleResponse@POLYN175131 the MagicNumber/String 'Metadata response contained no brokers. Will backoff and retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00085] In the recursive method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.handleResponse@POLYN175131 the MagicNumber/String 'Discovered all brokers {} to send requests to' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
