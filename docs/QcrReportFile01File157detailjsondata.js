console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java 43 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.xml" 
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
 , "c5" : "00030"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#30"
 , "c1" : "AllBrokersStrategy"
 , "c2" : "AllBrokersStrategy(LogContext)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#37"
 , "c1" : "ApiRequestScope"
 , "c2" : "lookupScope(BrokerKey)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#42"
 , "c1" : "MetadataRequest.Builder"
 , "c2" : "buildRequest(Set<BrokerKey>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#49"
 , "c1" : "LookupResult<BrokerKey>"
 , "c2" : "handleResponse(Set<BrokerKey>;AbstractResponse)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#74"
 , "c1" : "void"
 , "c2" : "validateLookupKeys(Set<BrokerKey>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.svg" }

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
 , "c4" : "1"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method lookupScope arguments BrokerKey  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method buildRequest arguments Set&lt;BrokerKey &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method handleResponse arguments Set&lt;BrokerKey &gt;  keys|AbstractResponse  abstractResponse"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00049] For method handleResponse list of called methods Object monObjet|MetadataResponseData response_dataN172447"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.handleResponse@POLYN172159 the MagicNumber/String  'Metadata response contained no brokers. Will backoff and retry' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.handleResponse@POLYN172159 the MagicNumber/String  'Discovered all brokers {} to send requests to' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method validateLookupKeys arguments Set&lt;BrokerKey &gt;  keys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument keys is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.validateLookupKeys@POLYN173363 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.validateLookupKeys@POLYN173363 the MagicNumber/String  'Unexpected key set: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.validateLookupKeys@POLYN173363 the MagicNumber/String  'Unexpected key set: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00094] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.BrokerKey.equals@POLYN174130 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.BrokerKey.equals@POLYN174130 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.BrokerKey.equals@POLYN174130 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.BrokerKey.toString@POLYN174792 the MagicNumber/String  'BrokerKey(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.BrokerKey.toString@POLYN174792 the MagicNumber/String  'brokerId=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.BrokerKey.toString@POLYN174792 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method completeLookup arguments Map&lt;BrokerKey ,Integer &gt;  brokerMapping"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#122"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00122] The argument brokerMapping is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.completeLookup@POLYN175520 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.completeLookup@POLYN175520 the MagicNumber/String  'Invalid lookup mapping ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.completeLookup@POLYN175520 the MagicNumber/String  ' -&amp;gt; ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#133"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00133] For method completeLookupExceptionally arguments Map&lt;BrokerKey ,Throwable &gt;  lookupErrors"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#133"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00133] The argument lookupErrors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.completeLookupExceptionally@POLYN176204 the MagicNumber/String  'Unexpected keys among lookup errors: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method complete arguments Map&lt;BrokerKey ,V &gt;  values"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#141"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00141] The argument values is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#145"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00145] For method complete arguments AllBrokersStrategy.BrokerKey  key|V  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.complete@POLYN176822 the MagicNumber/String  'Invalid attempt to complete with lookup key sentinel' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#154"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00154] For method completeExceptionally arguments Map&lt;BrokerKey ,Throwable &gt;  errors"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#154"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00154] The argument errors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00158] For method completeExceptionally arguments AllBrokersStrategy.BrokerKey  key|Throwable  t"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#170"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00170] For method futureOrThrow arguments BrokerKey  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#170"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00170] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.futureOrThrow@POLYN177935 the MagicNumber/String  'Attempt to complete with invalid key: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.futureOrThrow@POLYN177935 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.AllBrokersFuture.futureOrThrow@POLYN177935 the MagicNumber/String  'Attempt to complete with unknown broker id: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.admin.internals.AllBrokersStrategy.handleResponse@POLYN172159"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#56"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00056] In the recursive method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.handleResponse@POLYN172159 the MagicNumber/String 'Metadata response contained no brokers. Will backoff and retry' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00059] In the recursive method org.apache.kafka.clients.admin.internals.AllBrokersStrategy.handleResponse@POLYN172159 the MagicNumber/String 'Discovered all brokers {} to send requests to' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/AllBrokersStrategy.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
