console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java 24 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AuthenticateCallbackHandler"
 , "c2" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClientCallbackHandler"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClientCallbackHandler" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#35"
 , "c1" : "boolean"
 , "c2" : "configured()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#40"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>;String;List<AppConfigurationEntry>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#47"
 , "c1" : "void"
 , "c2" : "handle(Callback[])"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#61"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#65"
 , "c1" : "void"
 , "c2" : "handleCallback(OAuthBearerTokenCallback)"
 , "c3" : "5"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00096"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#96"
 , "c1" : "void"
 , "c2" : "handleCallback(SaslExtensionsCallback;Subject)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00030] The class OAuthBearerSaslClientCallbackHandler contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method configure arguments Map&lt;String ,? &gt;  configs|String  saslMechanism|List&lt;AppConfigurationEntry &gt;  jaasConfigEntries"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClientCallbackHandler.configure@POLYN167122 the MagicNumber/String  'Unexpected SASL mechanism: %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClientCallbackHandler.configure@POLYN167122 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method handle arguments Callback[]  callbacks"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00051] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00052] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00053] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00054] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClientCallbackHandler.handle@POLYN167581 the MagicNumber/String  'Callback handler not configured' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method handleCallback arguments OAuthBearerTokenCallback  callback"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument callback is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClientCallbackHandler.handleCallback@POLYN168346 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClientCallbackHandler.handleCallback@POLYN168346 the MagicNumber/String  'Callback had a token already' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClientCallbackHandler.handleCallback@POLYN168346 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClientCallbackHandler.handleCallback@POLYN168346 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClientCallbackHandler.handleCallback@POLYN168346 the MagicNumber/String  'No OAuth Bearer tokens in Subject's private credentials' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClientCallbackHandler.handleCallback@POLYN168346 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClientCallbackHandler.handleCallback@POLYN168346 the MagicNumber/String  'Found {} OAuth Bearer tokens in Subject's private credentials; the oldest expires at {}, will use the newest, which expires at {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method handleCallback arguments SaslExtensionsCallback  extensionsCallback|Subject  subject"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#96"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00096] The argument extensionsCallback is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslClientCallbackHandler.handleCallback@POLYN170620 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00061] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/oauthbearer/internals/OAuthBearerSaslClientCallbackHandler.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00061] Void method close is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
